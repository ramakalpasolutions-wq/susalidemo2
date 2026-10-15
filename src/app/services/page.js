import { ArrowUpRight, CheckCircle2, HeartHandshake } from 'lucide-react';
import Link from 'next/link';
import { services, journey } from '@/data/site';
import DynamicIcon from '@/components/Icons';
import { PageHero, SectionTitle, Journey, CTA } from '@/components/Shared';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import TiltCard from '@/components/TiltCard';

export const metadata = {
  title: 'SUSALI Services',
  description: "SUSALI Services — Connected Healthcare & Patient Support",
};

export default function Services() {
  return <>
    <PageHero tag="HOW WE HELP" title="Connecting You to" accent="the Care Journey." description="Healthcare involves more than appointments and treatment. It involves people, information, decisions and continued care. SUSALI brings important healthcare coordination services together." />

    <section className="section-space">
      <div className="container">
        <SectionTitle eyebrow="OUR SERVICE PHILOSOPHY" title="Thoughtful Support for Every" accent="Healthcare Connection." desc="Every patient journey begins differently. Our services aim to support meaningful connections between patients and medical professionals." />
        <StaggerContainer className="service-detail-grid" stagger={0.08}>
          {services.map(item => (
            <StaggerItem key={item.id}>
              <TiltCard className="service-detail" style={{ height: '100%' }}>
                <div className="detail-top">
                  <span className="service-icon"><DynamicIcon name={item.icon} size={30} /></span>
                  <span className="detail-no">{item.id}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="detail-foot">
                  <CheckCircle2 size={17} />
                  <span>{item.detail}</span>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <ScrollReveal>
      <section className="process-light section-space">
        <div className="container">
          <SectionTitle eyebrow="HOW SUSALI WORKS" title="From the First Connection to" accent="Continued Care." desc="Every healthcare journey is different. SUSALI helps bring the important steps together in one connected experience." />
          <Journey />
        </div>
      </section>
    </ScrollReveal>

    <CTA small />
  </>;
}