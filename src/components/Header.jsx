'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Menu,
  X,
  Globe,
} from 'lucide-react';
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';

import MagneticButton from '@/components/MagneticButton';
import { useLanguage } from '@/context/LanguageContext';

const links = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/services', key: 'services' },
  { href: '/healthcare-network', key: 'network' },
  { href: '/faqs', key: 'faqs' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  // Avoid lang-related SSR/client mismatch (localStorage, etc.)
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const { scrollY } = useScroll();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    setScrolled(latest > 20);

    if (latest > previous && latest > 180 && !open) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    setOpen(false);
    setHidden(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        className={`sh-header ${scrolled ? 'sh-scrolled' : ''}`}
        initial={false}
        animate={{
          y: hidden ? '-100%' : '0%',
        }}
        transition={{
          duration: 0.35,
          ease: 'easeInOut',
        }}
      >
        <div className="sh-container">
          {/* OFFICIAL SUSALI LOGO */}
          <Link
            href="/"
            className="sh-brand"
            aria-label="SUSALI Healthcare Services Home"
          >
            <Image
              src="/logo.png"
              alt="SUSALI Healthcare Services"
              width={190}
              height={120}
              className="sh-logo"
              priority
            />
          </Link>

          {/* NAVIGATION */}
          <nav
            id="susali-navigation"
            aria-label="Main navigation"
            className={`sh-navigation ${open ? 'sh-open' : ''}`}
          >
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={pathname === link.href ? 'sh-active' : ''}
                onClick={() => setOpen(false)}
              >
                {t.nav[link.key]}
              </Link>
            ))}

            {/* MOBILE CONTACT */}
            <Link
              href="/contact"
              className="sh-mobile-contact"
              onClick={() => setOpen(false)}
            >
              {t.nav.contact}
              <ArrowUpRight size={17} />
            </Link>
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="sh-actions">
            {/* LANGUAGE SWITCHER — stable until mounted */}
            <div className="sh-language" suppressHydrationWarning>
              <Globe size={15} />

              <button
                type="button"
                className={mounted && lang === 'en' ? 'sh-selected' : ''}
                onClick={() => setLang('en')}
              >
                EN
              </button>

              <span className="sh-divider">/</span>

              <button
                type="button"
                className={mounted && lang === 'te' ? 'sh-selected' : ''}
                onClick={() => setLang('te')}
              >
                తెలుగు
              </button>
            </div>

            {/* PREMIUM CONTACT BUTTON */}
            <div className="sh-desktop-cta">
              <MagneticButton className="sh-magnetic">
                <Link href="/contact" className="sh-contact-btn">
                  <span>{t.nav.cta}</span>
                  <span className="sh-cta-icon">
                    <ArrowUpRight size={17} />
                  </span>
                </Link>
              </MagneticButton>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              className="sh-menu-btn"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="susali-navigation"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>

        <div className="sh-bottom-line" />
      </motion.header>

      {/*
        Plain <style> instead of styled-jsx.
        styled-jsx was injecting jsx-XXXX classes on the server only → hydration mismatch.
      */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* ==========================================
           SUSALI HEALTHCARE PREMIUM WHITE HEADER
           White + Emerald Green + Metallic Gold
        ========================================== */

        .sh-header {
          --sh-white: #ffffff;
          --sh-emerald: #063e34;
          --sh-emerald-dark: #032e26;
          --sh-emerald-light: #0e6353;
          --sh-gold: #bd954e;
          --sh-gold-light: #e1c482;
          --sh-ivory: #f9f6ef;
          --sh-muted: #64736e;

          position: sticky !important;
          top: 0 !important;
          left: 0;
          right: 0;

          width: 100%;
          z-index: 9999;

          background: #ffffff !important;
          color: var(--sh-emerald);

          border: none;

          box-shadow:
            0 2px 20px rgba(3, 46, 38, 0.045);

          isolation: isolate;

          transition:
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .sh-header * {
          box-sizing: border-box;
        }

        /* ==========================================
           CONTAINER
        ========================================== */

        .sh-header .sh-container {
          width: 100%;
          max-width: 1440px;
          min-height: 102px;

          margin: 0 auto;
          padding: 0 42px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 28px;
        }

        /* ==========================================
           LOGO
        ========================================== */

        .sh-header .sh-brand {
          display: flex;
          align-items: center;
          justify-content: flex-start;

          flex-shrink: 0;
          width: 185px;

          text-decoration: none;
          line-height: 0;
        }

        .sh-header .sh-logo {
          display: block;

          width: 185px !important;
          height: auto !important;
          max-width: none !important;

          object-fit: contain;

          transition:
            transform 0.3s ease,
            filter 0.3s ease;
        }

        .sh-header .sh-brand:hover .sh-logo {
          transform: scale(1.035);

          filter:
            drop-shadow(
              0 4px 9px rgba(189, 149, 78, 0.15)
            );
        }

        /* ==========================================
           NAVIGATION
        ========================================== */

        .sh-header .sh-navigation {
          display: flex;
          align-items: center;
          justify-content: center;

          flex: 1;

          gap: clamp(15px, 1.8vw, 32px);
        }

        .sh-header .sh-navigation > a {
          position: relative;

          display: inline-flex;
          align-items: center;

          padding: 12px 0;

          color: #234f43 !important;

          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.015em;

          line-height: 1.4;
          white-space: nowrap;
          text-decoration: none;

          background: transparent;

          transition: color 0.25s ease;
        }

        .sh-header .sh-navigation > a:hover,
        .sh-header .sh-navigation > a.sh-active {
          color: var(--sh-gold) !important;
        }

        /* GOLD ACTIVE UNDERLINE */

        .sh-header .sh-navigation > a:not(
          .sh-mobile-contact
        )::after {
          content: '';

          position: absolute;
          bottom: 4px;
          left: 0;

          width: 0;
          height: 2px;

          background: linear-gradient(
            90deg,
            #a67d37,
            #e1c482
          );

          border-radius: 4px;

          transition: width 0.3s ease;
        }

        .sh-header .sh-navigation > a:hover::after,
        .sh-header .sh-navigation > a.sh-active::after {
          width: 100%;
        }

        /* ==========================================
           RIGHT ACTIONS
        ========================================== */

        .sh-header .sh-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;

          gap: 20px;
          flex-shrink: 0;
        }

        /* ==========================================
           LANGUAGE SWITCHER
        ========================================== */

        .sh-header .sh-language {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 9px;
          flex-shrink: 0;

          padding: 10px 14px;

          background: #ffffff;

          border: 1px solid
            rgba(189, 149, 78, 0.42);

          border-radius: 50px;

          color: var(--sh-gold);

          box-shadow:
            0 2px 10px rgba(189, 149, 78, 0.04);
        }

        .sh-header .sh-language button {
          appearance: none;

          padding: 0;
          margin: 0;

          background: transparent;
          border: none;

          color: #75827b;

          font-size: 12px;
          font-weight: 500;

          cursor: pointer;
          white-space: nowrap;

          transition: color 0.25s ease;
        }

        .sh-header .sh-language button:hover,
        .sh-header .sh-language button.sh-selected {
          color: var(--sh-emerald);
          font-weight: 700;
        }

        .sh-header .sh-divider {
          color: rgba(189, 149, 78, 0.5);
        }

        /* ==========================================
           PREMIUM EMERALD CONTACT BUTTON
        ========================================== */

        .sh-header .sh-desktop-cta {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .sh-header .sh-contact-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 15px;

          min-height: 47px;
          padding: 7px 8px 7px 20px;

          background: linear-gradient(
            120deg,
            #063e34 0%,
            #095346 100%
          ) !important;

          border: 1px solid #0c5749;
          border-radius: 6px;

          color: #ffffff !important;

          font-size: 13px;
          font-weight: 600;

          line-height: 1.3;
          white-space: nowrap;
          text-decoration: none;

          box-shadow:
            0 5px 16px rgba(6, 62, 52, 0.15);

          transition:
            background 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s ease;
        }

        .sh-header .sh-contact-btn:hover {
          background: linear-gradient(
            120deg,
            #032e26 0%,
            #063e34 100%
          ) !important;

          color: #ffffff !important;

          box-shadow:
            0 8px 25px rgba(6, 62, 52, 0.23);

          transform: translateY(-2px);
        }

        /* GOLD ICON BOX */

        .sh-header .sh-cta-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          width: 33px;
          height: 33px;

          flex-shrink: 0;

          border-radius: 4px;

          background: linear-gradient(
            135deg,
            #ead39c,
            #bd954e
          );

          color: #063e34;

          transition: transform 0.3s ease;
        }

        .sh-header .sh-contact-btn:hover .sh-cta-icon {
          transform: rotate(45deg);
        }

        /* ==========================================
           BOTTOM GOLD LINE
        ========================================== */

        .sh-header .sh-bottom-line {
          width: 100%;
          height: 1px;

          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(189, 149, 78, 0.18) 20%,
            rgba(189, 149, 78, 0.52) 50%,
            rgba(189, 149, 78, 0.18) 80%,
            transparent 100%
          );
        }

        /* ==========================================
           SCROLLED HEADER
        ========================================== */

        .sh-header.sh-scrolled {
          background: rgba(
            255, 255, 255, 0.98
          ) !important;

          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);

          box-shadow:
            0 5px 25px rgba(3, 46, 38, 0.09);
        }

        /* ==========================================
           MOBILE MENU BUTTON
        ========================================== */

        .sh-header .sh-menu-btn {
          display: none;
          align-items: center;
          justify-content: center;

          width: 42px;
          height: 42px;

          flex-shrink: 0;
          padding: 0;

          border: 1px solid
            rgba(6, 62, 52, 0.18);

          border-radius: 6px;

          background: #f4f8f5;
          color: var(--sh-emerald);

          cursor: pointer;

          transition:
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .sh-header .sh-menu-btn:hover {
          background: #eaf2ed;
          border-color: var(--sh-gold);
        }

        .sh-header .sh-navigation > .sh-mobile-contact {
          display: none;
        }

        /* ==========================================
           SMALL DESKTOP
        ========================================== */

        @media (max-width: 1200px) {
          .sh-header .sh-container {
            padding: 0 26px;
            gap: 18px;
          }

          .sh-header .sh-brand {
            width: 160px;
          }

          .sh-header .sh-logo {
            width: 160px !important;
          }

          .sh-header .sh-navigation {
            gap: 16px;
          }

          .sh-header .sh-navigation > a {
            font-size: 12px;
          }

          .sh-header .sh-actions {
            gap: 12px;
          }

          .sh-header .sh-contact-btn {
            padding-left: 14px;
            gap: 9px;
          }
        }

        /* ==========================================
           TABLET AND MOBILE
        ========================================== */

        @media (max-width: 1024px) {
          .sh-header .sh-container {
            min-height: 82px;
            padding: 0 24px;
          }

          .sh-header .sh-brand {
            width: 145px;
          }

          .sh-header .sh-logo {
            width: 145px !important;
          }

          .sh-header .sh-menu-btn {
            display: inline-flex;
          }

          .sh-header .sh-desktop-cta {
            display: none;
          }

          .sh-header .sh-navigation {
            position: absolute;

            top: 100%;
            left: 0;
            right: 0;

            width: 100%;

            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;

            gap: 0;

            padding: 12px 26px 25px;

            background: #ffffff !important;

            border-top: 1px solid
              rgba(189, 149, 78, 0.15);

            box-shadow:
              0 20px 35px rgba(3, 46, 38, 0.12);

            opacity: 0;
            visibility: hidden;
            pointer-events: none;

            transform: translateY(-10px);

            transition:
              opacity 0.25s ease,
              visibility 0.25s ease,
              transform 0.25s ease;
          }

          .sh-header .sh-navigation.sh-open {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;

            transform: translateY(0);
          }

          .sh-header .sh-navigation > a {
            display: flex;
            align-items: center;
            justify-content: space-between;

            width: 100%;
            padding: 16px 5px;

            font-size: 14px;

            border-bottom: 1px solid
              rgba(6, 62, 52, 0.08);

            color: #063e34 !important;
          }

          .sh-header .sh-navigation > a::after {
            display: none;
          }

          /* MOBILE CONTACT BUTTON */

          .sh-header .sh-navigation > .sh-mobile-contact {
            display: flex;

            margin-top: 18px;
            padding: 15px 18px;

            border: none;
            border-radius: 6px;

            background: linear-gradient(
              120deg,
              #063e34,
              #095346
            ) !important;

            color: #ffffff !important;

            font-weight: 700;
          }

          .sh-header .sh-navigation > .sh-mobile-contact:hover {
            color: #ffffff !important;
          }

          .sh-header .sh-mobile-contact svg {
            color: #e1c482;
          }
        }

        /* ==========================================
           MOBILE
        ========================================== */

        @media (max-width: 480px) {
          .sh-header .sh-container {
            min-height: 76px;
            padding: 0 15px;
            gap: 10px;
          }

          .sh-header .sh-brand {
            width: 130px;
          }

          .sh-header .sh-logo {
            width: 130px !important;
          }

          .sh-header .sh-actions {
            gap: 10px;
          }

          .sh-header .sh-language {
            padding: 8px 10px;
            gap: 6px;
          }

          .sh-header .sh-language button {
            font-size: 11px;
          }

          .sh-header .sh-menu-btn {
            width: 39px;
            height: 39px;
          }
        }

        @media (max-width: 360px) {
          .sh-header .sh-brand {
            width: 112px;
          }

          .sh-header .sh-logo {
            width: 112px !important;
          }

          .sh-header .sh-language {
            padding: 7px;
            gap: 4px;
          }
        }

        /* ACCESSIBILITY */

        .sh-header a:focus-visible,
        .sh-header button:focus-visible {
          outline: 2px solid #bd954e;
          outline-offset: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .sh-header *,
          .sh-header *::before,
          .sh-header *::after {
            transition-duration: 0.01ms !important;
          }
        }
      `,
        }}
      />
    </>
  );
}