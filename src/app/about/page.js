import Link from 'next/link';
import { HeartHandshake, Eye, ShieldCheck, Lightbulb, Link as LinkIcon, RefreshCcw } from 'lucide-react';
import { PageHero, SectionTitle, CTA, Eyebrow } from '@/components/Shared';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import TiltCard from '@/components/TiltCard';

export const metadata = {
  title: 'About SUSALI',
  description: "About SUSALI — Connecting People and Healthcare",
};

const values = [
  { icon: HeartHandshake, title: 'Compassion', desc: 'We recognize that behind every medical appointment is a person seeking care, reassurance and understanding.' },
  { icon: LinkIcon, title: 'Connection', desc: 'We believe collaboration between patients, healthcare institutions and coordination teams can help create more organized healthcare experiences.' },
  { icon: Eye, title: 'Clarity', desc: 'Clear information and communication help patients better understand the next steps in their healthcare journey.' },
  { icon: ShieldCheck, title: 'Trust', desc: 'We value responsible processes, transparent communication and respectful handling of healthcare-related information.' },
  { icon: RefreshCcw, title: 'Continuity', desc: 'A patient\'s medical journey may extend across many visits. We believe available treatment history should remain connected.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We believe digital technology can help simplify complex processes and support more accessible healthcare information.' },
];

export default function About() {
  return <>
    <PageHero tag="DISCOVER THE HEART OF SUSALI" title="Built to Connect." accent="Inspired by Care." description="We believe the distance between a patient's healthcare needs and professional medical care can be made easier to navigate through meaningful connections." />

    <section className="section-space">
      <div className="container about-main">
        <ScrollReveal direction="left">
          <div>
            <Eyebrow>OUR STORY</Eyebrow>
            <h2>A Bridge Between <br /><span className="blue-text">Patients and Doctors.</span></h2>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div>
            <p className="lead">Healthcare begins with people. A patient looking for guidance. A doctor working to understand a health concern. A family seeking clarity. A hospital providing professional care.</p>
            <p>Between these moments lies an important need: connection. SUSALI is a healthcare coordination platform created around this idea.</p>
            <p>Our role is not to replace doctors or hospitals. Our role is to help connect the important steps that support the healthcare experience. By bringing information and coordination closer together, SUSALI aims to make healthcare journeys feel clearer, more organized and more human.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="mission-section section-space">
      <div className="container mission-grid">
        <ScrollReveal delay={0}>
          <div className="mission-card">
            <span className="mission-icon"><HeartHandshake size={28} /></span>
            <span className="mission-mini">OUR MISSION</span>
            <h3>To Bring Patients and Healthcare Professionals Closer.</h3>
            <p>Our mission is to help make healthcare journeys easier to navigate by connecting patients with participating healthcare providers through thoughtful coordination, clear communication and organized digital information.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="mission-card bright">
            <span className="mission-icon"><Eye size={28} /></span>
            <span className="mission-mini">OUR VISION</span>
            <h3>A Future Where Every Healthcare Journey Feels Connected.</h3>
            <p>We envision a healthcare ecosystem where patients can approach their medical journey with greater confidence, healthcare professionals can work within coordinated care pathways, and important health information is easier to access when needed.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-space">
      <div className="container">
        <SectionTitle eyebrow="OUR CORE VALUES" title="The principles behind" accent="every connection." desc="What drives our commitment to better healthcare experiences." />
        <StaggerContainer className="values-grid" stagger={0.1}>
          {values.map(({ icon: Icon, ...v }) => (
            <StaggerItem key={v.title}>
              <TiltCard className="value-card" style={{ height: '100%' }}>
                <span className="value-icon"><Icon size={26} /></span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <CTA small />
  </>;
}