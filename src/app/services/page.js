'use client';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import DynamicIcon from '@/components/Icons';
import { PageHero, SectionTitle, Journey, CTA } from '@/components/Shared';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import TiltCard from '@/components/TiltCard';
import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;

  return <>
    <PageHero tag={s.heroTag} title={s.heroTitle} accent={s.heroAccent} description={s.heroDesc} />

    <section className="section-space">
      <div className="container">
        <SectionTitle eyebrow={s.philosophyKicker} title={s.philosophyTitle1} accent={s.philosophyTitle2} desc={s.philosophyP} />
        <StaggerContainer className="service-detail-grid" stagger={0.08}>
          {s.list.map(item => (
            <StaggerItem key={item.id}>
              <TiltCard className="service-detail" style={{ height: '100%' }}>
                <div className="detail-top">
                  <span className="service-icon"><DynamicIcon name="HeartPulse" size={30} /></span>
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
          <SectionTitle eyebrow={s.journeyKicker} title={s.journeyTitle1} accent={s.journeyTitle2} />
          <Journey />
        </div>
      </section>
    </ScrollReveal>

    <CTA small />
  </>;
}