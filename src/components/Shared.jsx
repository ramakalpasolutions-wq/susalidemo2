'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Heart, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import DynamicIcon from './Icons';
import { journey } from '@/data/site';
import TextReveal from '@/components/TextReveal';
import ScrollReveal from '@/components/ScrollReveal';
import MagneticButton from '@/components/MagneticButton';
import TiltCard from '@/components/TiltCard';

export function Eyebrow({ children, light = false }) {
  return (
    <ScrollReveal className="inline-block">
      <span className={'eyebrow ' + (light ? 'eyebrow-light' : '')}>
        <span className="eyebrow-spark" />{children}
      </span>
    </ScrollReveal>
  );
}

export function PageHero({ tag, title, accent, description, side = 'pulse', image }) {
  return (
    <section className="page-hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Full background image */}
      {image && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
          }}
        >
          <Image
            src={image}
            alt=""
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="100vw"
          />
          {/* Soft overlay so text stays readable — no color redesign, just fade */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.78) 45%, rgba(255,255,255,0.45) 100%)',
            }}
          />
        </div>
      )}

      <div className="pagehero-glow" style={{ position: 'relative', zIndex: 1 }} />
      <div className="container pagehero-inner" style={{ position: 'relative', zIndex: 1 }}>
        <div>
          <Eyebrow light>{tag}</Eyebrow>
          <h1>
            <TextReveal text={title} delay={0.15} />{' '}
            {accent && (
              <motion.span
                className="gradient-text"
                initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'inline-block' }}
              >
                {accent}
              </motion.span>
            )}
          </h1>
          <ScrollReveal delay={0.4}><p>{description}</p></ScrollReveal>
        </div>

        {/* Keep existing right visual only when NO image */}
        {!image && (
          <ScrollReveal delay={0.3} direction="right" className="pagehero-decoration">
            <NetworkVisual compact={true} />
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}


export function NetworkVisual({ compact = false }) {
  return (
    <div className={'network-visual ' + (compact ? 'network-compact' : '')} aria-label="Abstract connected healthcare network illustration" role="img">
      <div className="network-grid" />
      <div className="orbit-ring orbit-outer" />
      <div className="orbit-ring orbit-mid" />
      <div className="orbit-ring orbit-inner" />
      <div className="network-center"><Heart size={compact ? 26 : 32} fill="currentColor" /><span className="center-underline" /></div>
      <span className="orbit-node node-one"><Stethoscope /></span>
      <span className="orbit-node node-two"><DynamicIcon name="Building2" /></span>
      <span className="orbit-node node-three"><DynamicIcon name="Activity" /></span>
      <span className="orbit-node node-four"><DynamicIcon name="UsersRound" /></span>
      <span className="network-ping ping-one" />
      <span className="network-ping ping-two" />
      <span className="node-label label-one">Connected care</span>
      <span className="node-label label-two">Healthcare network</span>
      <span className="network-tiny tiny-a" />
      <span className="network-tiny tiny-b" />
      <span className="network-tiny tiny-c" />
    </div>
  );
}

export function SectionTitle({ eyebrow, title, accent, desc, center = false }) {
  return (
    <div className={'section-head ' + (center ? 'text-center' : '')}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>
        <TextReveal text={title} delay={0.1} />{' '}
        {accent && (
          <motion.span
            className="blue-text"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'inline-block' }}
          >
            {accent}
          </motion.span>
        )}
      </h2>
      {desc && <ScrollReveal delay={0.3}><p>{desc}</p></ScrollReveal>}
    </div>
  );
}

export function Journey({ compact = false }) {
  return (
    <div className={'journey-steps ' + (compact ? 'journey-short' : '')}>
      {journey.map((s, i) => (
        <ScrollReveal key={s.num} delay={i * 0.12}>
          <div className="journey-step">
            <span className="step-index">{s.num}</span>
            <div className="step-head">
              <span>{String(i + 1).padStart(2, '0')}</span>
              {i < 3 && <span className="step-line" />}
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

export function CTA({ small = false }) {
  return (
    <ScrollReveal>
      <section className={'cta-section ' + (small ? 'cta-compact' : '')}>
        <div className="container">
          <div className="cta-panel">
            <div className="cta-halo" />
            <div className="cta-copy">
              <Eyebrow light>LET'S MOVE HEALTHCARE FORWARD</Eyebrow>
              <h2>Better connections.<br /><span>Stronger care journeys.</span></h2>
              <p>Discover how a connected healthcare approach can support patients, care teams and organizations.</p>
              <MagneticButton>
                <Link href="/contact" className="btn btn-light">Get in touch <ArrowUpRight size={18} /></Link>
              </MagneticButton>
            </div>
            <div className="cta-art" aria-hidden="true">
              <div className="cta-circle circle-one" />
              <div className="cta-circle circle-two" />
              <div className="cta-circle circle-three" />
              <div className="cta-plus">+</div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export function ServiceTile({ service }) {
  return (
    <TiltCard className="service-card">
      <div className="service-card-top">
        <span className="service-icon"><DynamicIcon name={service.icon} size={27} /></span>
        <span className="service-index">{service.id} / 06</span>
      </div>
      <div>
        <span className="service-tag">{service.tag}</span>
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
      </div>
      <Link href="/services" className="service-link" aria-label={'Explore ' + service.title}>
        <ArrowUpRight size={20} />
      </Link>
    </TiltCard>
  );
}