
'use client';

import Link from 'next/link';
import {
  ArrowUpRight,
  MessageCircleQuestion,
} from 'lucide-react';

import {
  PageHero,
  SectionTitle,
  CTA,
} from '@/components/Shared';

import FaqExplorer from '@/components/FaqExplorer';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';

export default function Faqs() {
  const { t } = useLanguage();
  const f = t.faqs;

  return (
    <>
      <PageHero
        tag={f.heroTag}
        title={f.heroTitle}
        accent={f.heroAccent}
        description={f.heroDesc}
      />

      <section className="section-space">
        <div className="container faq-page-layout">
          <ScrollReveal>
            <div className="faq-page-intro">
              <SectionTitle
                eyebrow={t.ui.faqIntro}
                title={f.introTitle1}
                accent={f.introTitle2}
              />

              <div className="help-box">
                <MessageCircleQuestion size={27} />

                <h3>{f.helpTitle}</h3>
                <p>{f.helpDesc}</p>

                <Link
                  href="/contact"
                  className="text-link"
                >
                  {f.helpBtn}
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <FaqExplorer />
        </div>
      </section>

      <CTA small />
    </>
  );
}
