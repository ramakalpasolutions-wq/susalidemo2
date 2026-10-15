'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Plus, Globe } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
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
  const path = usePathname();
  const { scrollY } = useScroll();
  const { lang, setLang, t } = useLanguage();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 15);
    if (latest > prev && latest > 150 && !open) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => setOpen(false), [path]);

  return (
    <motion.header 
      className={'og-header ' + (scrolled ? 'is-scrolled' : '')}
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <div className="og-nav container">
        <Link href="/" className="og-brand" aria-label="SUSALI home">
          <span className="og-brand-orb"><Plus size={22} strokeWidth={2.6} /></span>
          <span>SUSALI<small>CONNECTED CARE</small></span>
        </Link>

        <nav className={'og-navigation ' + (open ? 'is-open' : '')} id="susali-navigation">
          {links.map(link => (
            <Link key={link.href} href={link.href} className={path === link.href ? 'active' : ''} onClick={() => setOpen(false)}>
              {t.nav[link.key]}
            </Link>
          ))}
          <Link className="og-mobile-contact" href="/contact" onClick={() => setOpen(false)}>
            {t.nav.contact} <ArrowUpRight size={17} />
          </Link>
        </nav>

        {/* 🌐 Language Switcher Pill */}
        <div className="og-lang-toggle">
          <Globe size={15} style={{ opacity: 0.65 }} />
          <button 
            type="button" 
            className={lang === 'en' ? 'active' : ''} 
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <span className="divider">/</span>
          <button 
            type="button" 
            className={lang === 'te' ? 'active' : ''} 
            onClick={() => setLang('te')}
          >
            తెలుగు
          </button>
        </div>

        <MagneticButton className="og-nav-cta-wrap">
          <Link className="og-nav-cta" href="/contact">{t.nav.cta} <ArrowUpRight size={17} /></Link>
        </MagneticButton>

        <button type="button" className="og-menu-button" onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </motion.header>
  );
}