'use client';
import Link from 'next/link';
import { ArrowUpRight, Building2, HeartPulse, CheckCircle2, UsersRound } from 'lucide-react';
import { PageHero, SectionTitle, CTA, Eyebrow } from '@/components/Shared';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import TiltCard from '@/components/TiltCard';
import MagneticButton from '@/components/MagneticButton';
import DynamicIcon from '@/components/Icons';
import { useLanguage } from '@/context/LanguageContext';

export default function NetworkPage() {
  const { t } = useLanguage();
  const n = t.network;

  return (
    <>
      <PageHero
        tag={n.heroTag}
        title={n.heroTitle}
        accent={n.heroAccent}
        description={n.heroDesc}
        image="/hero-bg.jpg"
      />

      <section className="section-space">
        <div className="container network-intro">
          <div>
            <ScrollReveal direction="left">
              <Eyebrow>{n.whyKicker}</Eyebrow>
              <h2>
                {n.whyTitle1} <span className="blue-text">{n.whyTitle2}</span>
              </h2>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal direction="right">
              <p className="lead">{n.whyP1}</p>
              <p>{n.whyP2}</p>
            </ScrollReveal>
          </div>
        </div>

        {/* Equal Height Network Grid */}
        <div className="container" style={{ marginTop: 48 }}>
          <StaggerContainer className="network-groups-grid" stagger={0.08}>
            {n.groups.map((g) => (
              <StaggerItem key={g.title} className="network-grid-item">
                <TiltCard className="network-group-card">
                  <div className="network-group-icon">
                    <DynamicIcon name={g.icon} size={26} />
                  </div>
                  <h3>{g.title}</h3>
                  <p>{g.desc}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="network-highlight section-space">
        <div className="container network-highlight-grid">
          <ScrollReveal direction="left" className="connect-art">
            <span className="connect-main">S</span>
            <span className="connect-ring r1" />
            <span className="connect-ring r2" />
            <span className="connect-bubble b1">
              <Building2 size={22} />
            </span>
            <span className="connect-bubble b2">
              <HeartPulse size={22} />
            </span>
            <span className="connect-bubble b3">
              <UsersRound size={22} />
            </span>
          </ScrollReveal>

          <div>
            <ScrollReveal direction="right">
              <Eyebrow light>{n.pathwaysKicker}</Eyebrow>
              <h2>
                {n.pathwaysTitle1}
                <br />
                <span>{n.pathwaysTitle2}</span>
              </h2>
              <div className="highlight-checks" style={{ marginTop: 20 }}>
                {n.pathwaysList.map((item) => (
                  <span key={item}>
                    <CheckCircle2 /> {item}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="section-space">
          <div className="container">
            <SectionTitle
              eyebrow={n.collabKicker}
              title={n.collabTitle1}
              accent={n.collabTitle2}
              desc={n.collabP}
            />
            <div className="partnership-panel">
              <div>
                <h3>{n.ctaTitle1}</h3>
                <p>{n.ctaDesc}</p>
              </div>
              <MagneticButton>
                <Link className="btn btn-primary" href="/contact">
                  {n.collabBtn} <ArrowUpRight size={18} />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <CTA small />
    </>
  );
}