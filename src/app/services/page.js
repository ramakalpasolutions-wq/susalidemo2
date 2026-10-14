import { ArrowUpRight, CheckCircle2, HeartHandshake } from 'lucide-react';
import Link from 'next/link';
import { services, journey } from '@/data/site';
import DynamicIcon from '@/components/Icons';
import { PageHero, SectionTitle, Journey, CTA } from '@/components/Shared';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import TiltCard from '@/components/TiltCard';

export const metadata = {
  title: 'Our Services',
  description: "Explore SUSALI's proposed healthcare coordination services, including referral support, hospital collaboration and follow-up communication.",
};

export default function Services() {
  return <>
    <PageHero tag="WHAT WE DO" title="Connected support" accent="at every step." description="A people-centered approach to coordination, built around clearer communication and better healthcare connections." />

    <section className="section-space">
      <div className="container">
        <SectionTitle eyebrow="OUR SERVICE AREAS" title="Designed to simplify" accent="the journey." desc="Supporting the connections that matter across the healthcare experience." />
        <StaggerContainer className="service-detail-grid" stagger={0.08}>
          {services.map(item => (
            <StaggerItem key={item.id}>
              <TiltCard className="service-detail">
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
          <SectionTitle eyebrow="OUR APPROACH" title="How the care" accent="journey connects." desc="A simple overview of the coordination approach, from referral through follow-up." />
          <Journey />
        </div>
      </section>
    </ScrollReveal>

    <CTA small />
  </>;
}