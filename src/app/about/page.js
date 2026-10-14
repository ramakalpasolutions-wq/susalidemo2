import Link from 'next/link';
import { HeartHandshake, Eye, Target, ShieldCheck, Lightbulb, UsersRound, ArrowUpRight, MoveRight } from 'lucide-react';
import { PageHero, SectionTitle, CTA, Eyebrow } from '@/components/Shared';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import TiltCard from '@/components/TiltCard';

export const metadata = {
  title: 'About Us',
  description: "Learn about SUSALI's vision for better connected healthcare, our values and a people-centered coordination approach.",
};

const values = [
  { icon: HeartHandshake, title: 'People at the center', desc: 'Every connection begins with understanding the person behind the care journey.' },
  { icon: ShieldCheck, title: 'Clarity and trust', desc: 'Thoughtful communication helps build confidence throughout the coordination process.' },
  { icon: Lightbulb, title: 'Continuous improvement', desc: 'We believe meaningful progress comes from better pathways, processes and collaboration.' },
  { icon: UsersRound, title: 'Stronger together', desc: 'Coordinating stakeholders with a shared purpose can help bridge avoidable gaps.' },
];

export default function About() {
  return <>
    <PageHero tag="GET TO KNOW SUSALI" title="A purpose that" accent="connects us." description="We believe connected thinking can make healthcare journeys clearer, more coordinated and more human." />

    <section className="section-space">
      <div className="container about-main">
        <ScrollReveal direction="left">
          <div>
            <Eyebrow>OUR STORY</Eyebrow>
            <h2>Care is human.<br /><span className="blue-text">Connection matters.</span></h2>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div>
            <p className="lead">Healthcare is a journey involving people, providers, information and important decisions.</p>
            <p>SUSALI is conceived as a bridge between these touchpoints. Our approach emphasizes guidance, coordination and collaboration, with the aim of helping individuals navigate care pathways with greater clarity.</p>
            <p>By bringing healthcare stakeholders into better communication, we strive toward a future where the journey feels less fragmented and more supportive.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="mission-section section-space">
      <div className="container mission-grid">
        <ScrollReveal delay={0}>
          <div className="mission-card">
            <span className="mission-icon"><Target size={28} /></span>
            <span className="mission-mini">01 / OUR MISSION</span>
            <h3>Make healthcare journeys easier to navigate.</h3>
            <p>Support meaningful coordination between people, care teams and institutions through clear and thoughtful communication.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="mission-card bright">
            <span className="mission-icon"><Eye size={28} /></span>
            <span className="mission-mini">02 / OUR VISION</span>
            <h3>Healthcare that feels more connected.</h3>
            <p>Envision a healthcare ecosystem where collaboration and continuity help everyone move forward with confidence.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-space">
      <div className="container">
        <SectionTitle eyebrow="WHAT GUIDES US" title="The values behind" accent="every connection." desc="Principles that shape the experience we want to help create." />
        <StaggerContainer className="values-grid" stagger={0.1}>
          {values.map(({ icon: Icon, ...v }) => (
            <StaggerItem key={v.title}>
              <TiltCard className="value-card">
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