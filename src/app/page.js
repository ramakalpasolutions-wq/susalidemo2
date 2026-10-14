import Link from 'next/link';
import { ArrowRight, ArrowUpRight, HeartHandshake, Network, ShieldCheck, Activity, CheckCircle2, Sparkles, MessageCircleQuestion } from 'lucide-react';
import { HeroVisual, InteractiveJourney } from '@/components/OmbreExperience';
import { services } from '@/data/site';
import DynamicIcon from '@/components/Icons';
import FaqExplorer from '@/components/FaqExplorer';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import TiltCard from '@/components/TiltCard';
import CountUp from '@/components/CountUp';
import MagneticButton from '@/components/MagneticButton';
import TextReveal from '@/components/TextReveal';

export const metadata = {
  title: 'Connected healthcare, thoughtfully designed | SUSALI',
  description: 'Discover SUSALI: a human-centered approach to patient support, referral coordination, hospital connections and continued care.',
};

export default function Home() {
  return <>
    {/* ── HERO ── */}
    <section className="og-hero">
      <div className="og-hero-glow glow-a" />
      <div className="og-hero-glow glow-b" />
      <div className="og-hero-inner container">
        <ScrollReveal delay={0.1}>
          <span className="og-hero-badge"><ShieldCheck size={16} /> CONNECTING CARE WITH COMPASSION</span>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <h1>
            <TextReveal text="Better connections." delay={0.2} />
            <br />
            <span>
              <TextReveal text="Brighter care journeys." delay={0.45} />
            </span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <p>Making healthcare feel more connected through thoughtful coordination, trusted collaboration and people-first support.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.65}>
          <div className="og-hero-actions">
            <MagneticButton>
              <Link href="/services" className="og-pill-button og-pill-primary">Explore our services <ArrowUpRight size={19} /></Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/about" className="og-pill-button og-pill-soft">Discover SUSALI <ArrowRight size={18} /></Link>
            </MagneticButton>
          </div>
        </ScrollReveal>
        <HeroVisual />
        <ScrollReveal delay={0.9}>
          <div className="og-hero-footnote">
            <span><span className="og-status-dot" /> CONNECTIONS THAT MATTER</span>
            <a href="#about-preview">EXPLORE THE EXPERIENCE <span>↓</span></a>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* ── INTRO ── */}
    <section className="og-intro section-space" id="about-preview">
      <div className="container og-intro-layout">
        <ScrollReveal direction="left">
          <div className="og-intro-art">
            <div className="og-intro-orb">
              <HeartHandshake size={112} strokeWidth={1.05} />
              <div className="og-intro-halo halo-one" />
              <div className="og-intro-halo halo-two" />
            </div>
            <div className="og-intro-floating">
              <span className="og-mini-icon mint"><CheckCircle2 size={19} /></span>
              <div><strong>Human-centered</strong><small>Every connection counts</small></div>
            </div>
            <span className="og-intro-bottom-pill"><Sparkles size={15} /> Care. Clarity. Connection.</span>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div className="og-intro-copy">
            <span className="og-kicker">01 / WELCOME TO SUSALI</span>
            <h2>Healthcare works better <em>together.</em></h2>
            <p className="og-lead">A more thoughtful way to connect patients, healthcare providers and the people who support them.</p>
            <p>We believe that clear communication and meaningful collaboration can make the healthcare experience easier to navigate. SUSALI is focused on bringing those important connections closer together.</p>
            <Link href="/about" className="og-text-link">Get to know us <ArrowUpRight size={19} /></Link>
            <div className="og-intro-traits">
              <span><ShieldCheck size={19} /> Built on trust</span>
              <span><HeartHandshake size={19} /> People first</span>
              <span><Network size={19} /> Better together</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* ── SERVICES ── */}
    <section className="og-services section-space">
      <div className="container">
        <ScrollReveal>
          <div className="og-section-heading">
            <div><span className="og-kicker">02 / WHAT WE DO</span><h2>Thoughtful support at <em>every step.</em></h2></div>
            <p>A connected approach to the moments that matter across the healthcare experience.</p>
          </div>
        </ScrollReveal>
        <StaggerContainer className="og-services-grid" stagger={0.08}>
          {services.map((service, i) => (
            <StaggerItem key={service.id}>
              <Link href="/services" className={'og-service-card og-service-' + i}>
                <span className="og-service-icon"><DynamicIcon name={service.icon} size={27} /></span>
                <span className="og-service-number">{service.id} / 06</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <span className="og-service-arrow"><ArrowUpRight size={21} /></span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <ScrollReveal delay={0.2}>
          <div className="og-section-bottom">
            <span>One connected ecosystem. A more human experience.</span>
            <Link href="/services" className="og-text-link">View all services <ArrowUpRight size={18} /></Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* ── JOURNEY ── */}
    <ScrollReveal>
      <section className="og-journey-section section-space">
        <div className="container">
          <div className="og-section-heading og-section-heading-center">
            <span className="og-kicker">03 / THE SUSALI APPROACH</span>
            <h2>A clearer path to <em>connected care.</em></h2>
            <p>Explore a simplified illustration of the healthcare coordination journey. Choose any stage to learn more.</p>
          </div>
          <InteractiveJourney />
        </div>
      </section>
    </ScrollReveal>

    {/* ── NETWORK ── */}
    <section className="og-network-section section-space">
      <div className="container og-network-layout">
        <ScrollReveal direction="left">
          <div>
            <span className="og-kicker">04 / OUR HEALTHCARE NETWORK</span>
            <h2>Stronger care begins with <em>better connections.</em></h2>
            <p className="og-lead">A collaborative mindset that brings people, healthcare facilities and support teams closer.</p>
            <p>SUSALI's network vision centers on coordination and meaningful communication, while healthcare professionals remain responsible for clinical decisions and treatment.</p>
            <MagneticButton>
              <Link href="/healthcare-network" className="og-pill-button og-pill-primary">Explore the network <ArrowUpRight size={18} /></Link>
            </MagneticButton>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div className="og-network-art">
            <div className="og-network-ring ring-a" />
            <div className="og-network-ring ring-b" />
            <div className="og-network-core"><Network size={48} /><strong>SUSALI</strong><small>Connected care</small></div>
            <span className="og-network-node nn1"><HeartHandshake size={25} /><small>Support</small></span>
            <span className="og-network-node nn2"><Network size={25} /><small>Teams</small></span>
            <span className="og-network-node nn3"><Activity size={25} /><small>Care</small></span>
            <span className="og-network-node nn4"><ShieldCheck size={25} /><small>Trust</small></span>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* ── STATS ── */}
    <section className="section-space">
      <div className="container og-stats-row">
        <ScrollReveal delay={0}>
          <div className="og-stat-item">
            <h2><CountUp target={500} suffix="+" /></h2>
            <p>Patients Guided</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="og-stat-item">
            <h2><CountUp target={50} suffix="+" /></h2>
            <p>Care Partners</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="og-stat-item">
            <h2><CountUp target={98} suffix="%" /></h2>
            <p>Satisfaction Rate</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* ── FAQ ── */}
    <section className="og-faq-section section-space">
      <div className="container og-faq-layout">
        <ScrollReveal>
          <div>
            <span className="og-kicker">05 / YOUR QUESTIONS, ANSWERED</span>
            <h2>Curiosity is the start of <em>clarity.</em></h2>
            <p>We've answered some common questions about SUSALI and our approach to connected healthcare.</p>
            <Link href="/faqs" className="og-text-link">Browse all FAQs <ArrowUpRight size={19} /></Link>
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
            <span className="og-kicker">THE NEXT CONNECTION STARTS HERE</span>
            <h2>Let's create better<br /><em>healthcare connections.</em></h2>
            <p>Have a question or interested in connecting with SUSALI? We'd love to hear from you.</p>
            <MagneticButton>
              <Link href="/contact" className="og-pill-button og-pill-primary">Get in touch <ArrowUpRight size={18} /></Link>
            </MagneticButton>
            <div className="og-final-orb" />
          </div>
        </div>
      </section>
    </ScrollReveal>
  </>;
}