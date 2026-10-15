import Link from 'next/link';
import { ArrowRight, ArrowUpRight, HeartHandshake, Network, ShieldCheck, Activity, CheckCircle2, Sparkles } from 'lucide-react';
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
  title: 'SUSALI — Bridging the Gap Between Patients and Doctors',
  description: "Finding the right path to medical care should feel simpler, clearer and more connected.",
};

export default function Home() {
  return <>
    {/* ── HERO ── */}
    <section className="og-hero">
      <div className="og-hero-glow glow-a" />
      <div className="og-hero-glow glow-b" />
      <div className="og-hero-inner container">
        <ScrollReveal delay={0.1}>
          <span className="og-hero-badge"><ShieldCheck size={16} /> CONNECTING PEOPLE. EMPOWERING HEALTHCARE.</span>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <h1>
            <TextReveal text="Bridging the Gap Between" delay={0.2} />
            <br />
            <span>
              <TextReveal text="Patients and Doctors." delay={0.45} />
            </span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <p>Because Every Healthcare Journey Deserves the Right Connection. From your first consultation to continued care, SUSALI helps you stay connected to the moments that matter most.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.65}>
          <div className="og-hero-actions">
            <MagneticButton>
              <Link href="/services" className="og-pill-button og-pill-primary">Discover Our Services <ArrowUpRight size={19} /></Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="#about-preview" className="og-pill-button og-pill-soft">How SUSALI Works <ArrowRight size={18} /></Link>
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
              <div><strong>At SUSALI,</strong><small>Every connection begins with care.</small></div>
            </div>
            <span className="og-intro-bottom-pill"><Sparkles size={15} /> Care. Clarity. Connection.</span>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div className="og-intro-copy">
            <span className="og-kicker">WELCOME TO SUSALI</span>
            <h2>Healthcare Is Better When We're <em>Connected.</em></h2>
            <p className="og-lead">Every patient has a story. Every health concern deserves attention. And every journey toward better health begins with the right connection.</p>
            <p>Navigating healthcare can sometimes feel overwhelming. Finding the right hospital, coordinating appointments, understanding the next steps in treatment, and keeping important medical documents organized can create challenges for patients and their families.</p>
            <p>By bringing patient information, hospital coordination, treatment updates and medical records into one digital experience, we aim to make healthcare interactions more organized and easier to navigate.</p>
            <Link href="/about" className="og-text-link">Get to Know SUSALI <ArrowUpRight size={19} /></Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* ── SERVICES ── */}
    <section className="og-services section-space">
      <div className="container">
        <ScrollReveal>
          <div className="og-section-heading">
            <div><span className="og-kicker">WHAT WE DO</span><h2>Thoughtful Healthcare Connections. <em>Meaningful Support.</em></h2></div>
            <p>A connected healthcare experience is built through several important services working together.</p>
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
            <Link href="/services" className="og-text-link">Explore All Services <ArrowUpRight size={18} /></Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* ── JOURNEY ── */}
    <ScrollReveal>
      <section className="og-journey-section section-space">
        <div className="container">
          <div className="og-section-heading og-section-heading-center">
            <span className="og-kicker">YOUR JOURNEY WITH SUSALI</span>
            <h2>From the First Connection to <em>Continued Care.</em></h2>
            <p>Every healthcare journey is different. SUSALI helps bring the important steps together in one connected experience.</p>
          </div>
          <InteractiveJourney />
        </div>
      </section>
    </ScrollReveal>

    {/* ── NETWORK ── */}
    <section className="og-network-section section-space">
      <div className="container og-network-layout">
        <div>
          <ScrollReveal direction="left">
            <span className="og-kicker">OUR CONNECTED HEALTHCARE ECOSYSTEM</span>
            <h2>Better Connections. <em>Better Healthcare Experiences.</em></h2>
            <p className="og-lead">No single interaction defines a patient's healthcare journey.</p>
            <p>Through connected referral information, arranged hospital appointments, available medical records and continued treatment documentation, we strive to create a healthcare experience that feels less fragmented.</p>
            <div style={{ marginTop: 24 }}>
              <MagneticButton>
                <Link href="/healthcare-network" className="og-pill-button og-pill-primary">
                  Discover Our Healthcare Network <ArrowUpRight size={18} />
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
        <div>
          <ScrollReveal direction="right">
            <div className="og-network-art">
              <div className="og-network-ring ring-a" />
              <div className="og-network-ring ring-b" />
              <div className="og-network-core">
                <Network size={48} />
                <strong>SUSALI</strong>
                <small>Connected Ecosystem</small>
              </div>
              <span className="og-network-node nn1"><HeartHandshake size={25} /><small>Support</small></span>
              <span className="og-network-node nn2"><Network size={25} /><small>Teams</small></span>
              <span className="og-network-node nn3"><Activity size={25} /><small>Care</small></span>
              <span className="og-network-node nn4"><ShieldCheck size={25} /><small>Trust</small></span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* ── STATS CARD ── */}
    <section className="section-space">
      <div className="container">
        <ScrollReveal>
          <div className="og-stats-glass-card">
            <StaggerContainer className="og-stats-row" stagger={0.12}>
              <StaggerItem className="og-stat-item">
                <h2><CountUp target={500} suffix="+" /></h2>
                <p>Patients Guided</p>
              </StaggerItem>
              <StaggerItem className="og-stat-item">
                <h2><CountUp target={50} suffix="+" /></h2>
                <p>Care Partners</p>
              </StaggerItem>
              <StaggerItem className="og-stat-item">
                <h2><CountUp target={98} suffix="%" /></h2>
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
            <span className="og-kicker">YOUR QUESTIONS, ANSWERED</span>
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
            <span className="og-kicker">FINAL CALL TO ACTION</span>
            <h2>A Healthier Tomorrow Begins<br /><em>with Better Connections.</em></h2>
            <p>Whether you are beginning a healthcare journey, continuing treatment or learning about healthcare collaboration, discover how SUSALI brings people and care pathways closer together.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <MagneticButton>
                <Link href="/services" className="og-pill-button og-pill-primary">Explore SUSALI <ArrowUpRight size={18} /></Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/contact" className="og-pill-button og-pill-primary" style={{ background: 'rgba(255,255,255,0.1)' }}>Contact Us <ArrowRight size={18} /></Link>
              </MagneticButton>
            </div>
            <div className="og-final-orb" />
          </div>
        </div>
      </section>
    </ScrollReveal>
  </>;
}