
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  CheckCircle2,
  X,
} from 'lucide-react';

import DynamicIcon from '@/components/Icons';

import {
  PageHero,
  SectionTitle,
  Journey,
  CTA,
} from '@/components/Shared';

import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from '@/components/ScrollReveal';

import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;

  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveService(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Keep correct service selected when language changes.
  const selectedService =
    activeService === null
      ? null
      : s.list[activeService];

  return (
    <>
      <PageHero
        tag={s.heroTag}
        title={s.heroTitle}
        accent={s.heroAccent}
        description={s.heroDesc}
      />

      <section className="section-space">
        <div className="container">
          <SectionTitle
            eyebrow={s.philosophyKicker}
            title={s.philosophyTitle1}
            accent={s.philosophyTitle2}
            desc={s.philosophyP}
          />

          <StaggerContainer
            className="svc-grid"
            stagger={0.08}
          >
            {s.list.map((item, i) => (
              <StaggerItem
                key={item.id}
                className="svc-item"
              >
                <div
                  onClick={() => setActiveService(i)}
                  className={`svc-card svc-${i}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (
                      e.key === 'Enter' ||
                      e.key === ' '
                    ) {
                      e.preventDefault();
                      setActiveService(i);
                    }
                  }}
                >
                  <div className="svc-card-top">
                    <span className="svc-icon">
                      <DynamicIcon
                        name={
                          item.icon ||
                          'HeartPulse'
                        }
                        size={24}
                      />
                    </span>
                  </div>

                  {item.image && (
                    <div className="svc-image">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  <div className="svc-body">
                    <h3>{item.title}</h3>

                    <p className="svc-desc">
                      {item.desc}
                    </p>

                    <div className="svc-foot">
                      <span className="svc-foot-label">
                        {t.ui.clickDescription}
                      </span>

                      <span className="svc-arrow">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <ScrollReveal>
        <section className="process-light section-space">
          <div className="container">
            <SectionTitle
              eyebrow={s.journeyKicker}
              title={s.journeyTitle1}
              accent={s.journeyTitle2}
            />

            <Journey />
          </div>
        </section>
      </ScrollReveal>

      <CTA small />

      {/* Service detail popup */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
          style={{
            backgroundColor: 'rgba(20, 24, 38, 0.6)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            animation:
              'ogOverlayFadeIn 0.25s ease-out forwards',
          }}
          onClick={() => setActiveService(null)}
        >
          <div
            className="relative w-full max-w-2xl p-6 sm:p-8 overflow-y-auto"
            style={{
              background: 'rgba(255, 255, 255, 0.96)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              borderRadius: '32px',
              border: '1px solid rgba(255,255,255,0.95)',
              boxShadow:
                '0 30px 60px rgba(30,25,45,0.35)',
              maxHeight: '90vh',
              animation:
                'ogModalPop 0.3s cubic-bezier(0.16,1,0.3,1) forwards',
            }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedService.title}
          >
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-5 right-5 z-10 p-2 rounded-full transition-colors hover:bg-black/10 bg-white/80 backdrop-blur-md"
              style={{
                color: '#374151',
                border: '1px solid rgba(0,0,0,0.1)',
                cursor: 'pointer',
              }}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {selectedService.image && (
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 10',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  marginBottom: '24px',
                  background: '#F3EEF8',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 670px"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            )}

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  width: '48px',
                  height: '48px',
                  borderRadius: '16px',
                  background:
                    'linear-gradient(140deg,#F4E8F7,#E8E5FB)',
                  color: '#8D79A2',
                  border: '1px solid #fff',
                }}
              >
                <DynamicIcon
                  name={
                    selectedService.icon ||
                    'HeartPulse'
                  }
                  size={26}
                />
              </span>

              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  color: '#917E9B',
                  letterSpacing: 'normal',
                }}
              >
                {t.ui.service}{' '}
                {selectedService.id} / 06
              </span>
            </div>

            <h2
              style={{
                fontSize: '1.85rem',
                fontWeight: 850,
                lineHeight: 1.5,
                marginBottom: '1rem',
                color: '#2B303C',
                letterSpacing: 'normal',
              }}
            >
              {selectedService.title}
            </h2>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.85,
                color: '#546481',
                marginBottom: '1.75rem',
              }}
            >
              {selectedService.desc}
            </p>

            {selectedService.detail && (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.875rem 1.25rem',
                  background: '#F8F6FC',
                  borderRadius: '16px',
                  border: '1px solid #E9E5EE',
                  color: '#34394A',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
              >
                <CheckCircle2
                  size={20}
                  style={{
                    color: '#8F73A0',
                    flexShrink: 0,
                  }}
                />
                <span>{selectedService.detail}</span>
              </div>
            )}
          </div>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes ogOverlayFadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }

            @keyframes ogModalPop {
              from {
                opacity: 0;
                transform: scale(0.92) translateY(12px);
              }
              to {
                opacity: 1;
                transform: scale(1) translateY(0);
              }
            }
          `,
        }}
      />
    </>
  );
}
