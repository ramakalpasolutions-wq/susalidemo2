'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  HeartHandshake,
  Network,
  Activity,
} from 'lucide-react';
import { HeroVisual, InteractiveJourney } from '@/components/OmbreExperience';
import DynamicIcon from '@/components/Icons';
import FaqExplorer from '@/components/FaqExplorer';
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from '@/components/ScrollReveal';
import CountUp from '@/components/CountUp';
import MagneticButton from '@/components/MagneticButton';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <>
      {/* ── HERO ── */}
           {/* ── HERO ── */}
      <section className="og-hero-v2">
        {/* Background Graphic Image */}
        <div className="og-hero-bg-container">
          <Image
            src="/hero-bg.jpg"
            alt="SUSALI Healthcare Background"
            fill
            priority
            quality={90}
            className="og-hero-bg-image"
          />
          <div className="og-hero-bg-overlay" />
        </div>

        <div className="container og-hero-inner-v2">
          <div className="og-hero-grid-v2">
            {/* LEFT COLUMN: Main Text & CTAs */}
            <div className="og-hero-content-left">
              <ScrollReveal delay={0.1}>
                <div className="og-hero-badge-v2">
                  <span className="og-badge-check">
                    <CheckCircle2 size={15} />
                  </span>
                  CONNECTING PEOPLE WITH CARE
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h1 className="og-hero-title-v2">
                  <span className="gradient-text-purple">Better Connections.</span>
                  <br />
                  <span className="gradient-text-violet">
                    Better Healthcare Journeys.
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.35}>
                <p className="og-hero-desc-v2">
                  Healthcare is not just about accessing medical services — it is
                  about guiding people through every stage of their care. SUSALI
                  connects patients with healthcare providers through structured
                  referrals, appointment coordination, patient guidance, and
                  organized medical information. By bringing these essential services
                  together, we strive to make healthcare journeys more accessible,
                  coordinated, and seamless — helping patients navigate their next
                  steps with greater clarity and confidence.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <div className="og-hero-actions-v2">
                  <MagneticButton>
                    <Link
                      href="/services"
                      className="og-pill-button og-pill-dark"
                    >
                      Explore Our Services <ArrowUpRight size={18} />
                    </Link>
                  </MagneticButton>

                  <MagneticButton>
                    <Link
                      href="#about-preview"
                      className="og-pill-button og-pill-glass"
                    >
                      Discover How SUSALI Works <ArrowRight size={18} />
                    </Link>
                  </MagneticButton>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT COLUMN: Spacing area for doctor image in background */}
            <div className="og-hero-visual-space" />
          </div>

          {/* FULL WIDTH FLOATING GLASS CARDS (Spans across left, middle, right) */}
          <HeroVisual />
        </div>
      </section>

      {/* ── INTRO (WITH IMAGE) ── */}
      <section className="og-intro section-space" id="about-preview">
        <div className="container og-intro-layout">
          <ScrollReveal direction="left">
            <div
              className="og-intro-art"
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '32px',
                minHeight: '440px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 50px rgba(6, 62, 52, 0.08)',
              }}
            >
              <Image
                src="/about-intro.jpg"
                alt="SUSALI Healthcare Services"
                width={600}
                height={520}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: '32px',
                }}
                priority
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(6, 62, 52, 0.25) 100%)',
                  borderRadius: '32px',
                  pointerEvents: 'none',
                }}
              />
              <div className="og-intro-floating">
                <span className="og-mini-icon mint">
                  <CheckCircle2 size={19} />
                </span>
                <div>
                  <strong>SUSALI</strong>
                  <small>Care. Clarity. Connection.</small>
                </div>
              </div>
              <span className="og-intro-bottom-pill">
                <Sparkles size={15} /> Care. Clarity. Connection.
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="og-intro-copy">
              <span className="og-kicker">{h.welcomeKicker}</span>
              <h2>
                {h.welcomeTitle1} <em>{h.welcomeTitle2}</em>
              </h2>
              <p className="og-lead">{h.welcomeLead}</p>
              <p>{h.welcomeP1}</p>
              <p>{h.welcomeP2}</p>
              <Link href="/about" className="og-text-link">
                {h.welcomeBtn} <ArrowUpRight size={19} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="og-services section-space">
        <div className="container">
          <ScrollReveal>
            <div className="og-section-heading">
              <div>
                <span className="og-kicker">{h.servicesKicker}</span>
                <h2>
                  {h.servicesTitle1} <em>{h.servicesTitle2}</em>
                </h2>
              </div>
              <p>{h.servicesDesc}</p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="og-services-grid" stagger={0.08}>
            {t.services.list.map((service, i) => (
              <StaggerItem key={service.id}>
                <Link
                  href="/services"
                  className={'og-service-card og-service-' + i}
                >
                  <span className="og-service-icon">
                    <DynamicIcon name="HeartPulse" size={27} />
                  </span>
                  <span className="og-service-number">{service.id} / 06</span>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <span className="og-service-arrow">
                    <ArrowUpRight size={21} />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal delay={0.2}>
            <div className="og-section-bottom">
              <span>One connected ecosystem.</span>
              <Link href="/services" className="og-text-link">
                {h.servicesBtn} <ArrowUpRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── JOURNEY ── */}
      <ScrollReveal>
        <section className="og-journey-section section-space">
          <div className="container">
            <div className="og-section-heading og-section-heading-center">
              <span className="og-kicker">{h.journeyKicker}</span>
              <h2>
                {h.journeyTitle1} <em>{h.journeyTitle2}</em>
              </h2>
              <p>{h.journeyDesc}</p>
            </div>
            <InteractiveJourney />
          </div>
        </section>
      </ScrollReveal>

      {/* ── NETWORK ── */}
      <section className="og-network-section section-space">
        <div className="container og-network-layout">
          <ScrollReveal direction="left" style={{ minWidth: 0 }}>
            <div>
              <span className="og-kicker">{h.networkKicker}</span>
              <h2>
                {h.networkTitle1} <em>{h.networkTitle2}</em>
              </h2>
              <p className="og-lead">{h.networkDesc}</p>
              <div style={{ marginTop: 24 }}>
                <MagneticButton>
                  <Link
                    href="/healthcare-network"
                    className="og-pill-button og-pill-primary"
                  >
                    {h.networkBtn} <ArrowUpRight size={18} />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" style={{ minWidth: 0 }}>
            <div className="og-network-art">
              <div className="og-network-ring ring-a" />
              <div className="og-network-ring ring-b" />
              <div className="og-network-core">
                <Network size={48} />
                <strong>SUSALI</strong>
                <small>Connected Ecosystem</small>
              </div>
              <span className="og-network-node nn1">
                <HeartHandshake size={25} />
                <small>Support</small>
              </span>
              <span className="og-network-node nn2">
                <Network size={25} />
                <small>Teams</small>
              </span>
              <span className="og-network-node nn3">
                <Activity size={25} />
                <small>Care</small>
              </span>
              <span className="og-network-node nn4">
                <ShieldCheck size={25} />
                <small>Trust</small>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── STATS CARD ── */}
      <section className="section-space">
        <div className="container">
          <ScrollReveal>
            <div className="og-stats-glass-card">
              <StaggerContainer className="og-stats-row" stagger={0.12}>
                <StaggerItem className="og-stat-item">
                  <h2>
                    <CountUp target={500} suffix="+" />
                  </h2>
                  <p>Patients Guided</p>
                </StaggerItem>
                <StaggerItem className="og-stat-item">
                  <h2>
                    <CountUp target={50} suffix="+" />
                  </h2>
                  <p>Care Partners</p>
                </StaggerItem>
                <StaggerItem className="og-stat-item">
                  <h2>
                    <CountUp target={98} suffix="%" />
                  </h2>
                  <p>Satisfaction Rate</p>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="og-faq-section section-space">
        <div className="container og-faq-layout">
          <ScrollReveal>
            <div>
              <span className="og-kicker">{h.faqsKicker}</span>
              <h2>
                {h.faqsTitle1} <em>{h.faqsTitle2}</em>
              </h2>
              <Link href="/faqs" className="og-text-link">
                {h.faqsBtn} <ArrowUpRight size={19} />
              </Link>
            </div>
          </ScrollReveal>
          <FaqExplorer limit={4} />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <ScrollReveal>
        <section className="og-final-section">
          <div className="container">
            <div className="og-final-card">
              <span className="og-kicker">SUSALI</span>
              <h2>
                {h.ctaTitle1}
                <br />
                <em>{h.ctaTitle2}</em>
              </h2>
              <p>{h.ctaDesc}</p>
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <MagneticButton>
                  <Link
                    href="/services"
                    className="og-pill-button og-pill-primary"
                  >
                    {h.ctaBtnPrimary} <ArrowUpRight size={18} />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="og-pill-button og-pill-primary"
                    style={{ background: 'rgba(255,255,255,0.1)' }}
                  >
                    {h.ctaBtnSecondary} <ArrowRight size={18} />
                  </Link>
                </MagneticButton>
              </div>
              <div className="og-final-orb" />
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}