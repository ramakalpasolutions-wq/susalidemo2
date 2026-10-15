'use client';
import Link from 'next/link';
import { HeartHandshake, Eye, ShieldCheck, Lightbulb, Link as LinkIcon, RefreshCcw } from 'lucide-react';
import { PageHero, SectionTitle, CTA, Eyebrow } from '@/components/Shared';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import TiltCard from '@/components/TiltCard';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const a = t.about;
  const icons = [HeartHandshake, Eye, LinkIcon, ShieldCheck, RefreshCcw, Lightbulb];

  return <>
    <PageHero tag={a.heroTag} title={a.heroTitle} accent={a.heroAccent} description={a.heroDesc} />

    <section className="section-space">
      <div className="container about-main">
        <ScrollReveal direction="left">
          <div>
            <Eyebrow>{a.storyKicker}</Eyebrow>
            <h2>{a.storyTitle1} <br /><span className="blue-text">{a.storyTitle2}</span></h2>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div>
            <p className="lead">{a.storyP1}</p>
            <p>{a.storyP2}</p>
            <p>{a.storyP3}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="mission-section section-space">
      <div className="container mission-grid">
        <ScrollReveal delay={0}>
          <div className="mission-card">
            <span className="mission-icon"><HeartHandshake size={28} /></span>
            <span className="mission-mini">{a.missionTag}</span>
            <h3>{a.missionTitle}</h3>
            <p>{a.missionDesc}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="mission-card bright">
            <span className="mission-icon"><Eye size={28} /></span>
            <span className="mission-mini">{a.visionTag}</span>
            <h3>{a.visionTitle}</h3>
            <p>{a.visionDesc}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-space">
      <div className="container">
        <SectionTitle eyebrow={a.valuesKicker} title={a.valuesTitle1} accent={a.valuesTitle2} />
        <StaggerContainer className="values-grid" stagger={0.1}>
          {a.values.map((v, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <StaggerItem key={v.title}>
                <TiltCard className="value-card" style={{ height: '100%' }}>
                  <span className="value-icon"><Icon size={26} /></span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>

    <CTA small />
  </>;
}