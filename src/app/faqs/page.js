import Link from 'next/link';
import { ArrowUpRight, MessageCircleQuestion } from 'lucide-react';
import { PageHero, SectionTitle, CTA } from '@/components/Shared';
import FaqExplorer from '@/components/FaqExplorer';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'SUSALI FAQs',
  description: "SUSALI FAQs — Healthcare Services, Appointments & Records",
};

export default function Faqs() {
  return <>
    <PageHero tag="HERE TO MAKE THINGS CLEARER" title="Your Questions." accent="Our Answers." description="Understanding your healthcare journey matters. Explore helpful information about SUSALI, registration, connecting with hospitals, medical records and continued care." />

    <section className="section-space">
      <div className="container faq-page-layout">
        <ScrollReveal>
          <div className="faq-page-intro">
            <SectionTitle eyebrow="FAQS" title="Everything you" accent="need to know." desc="Browse answers by topic, or get in touch for a conversation about SUSALI." />
            <div className="help-box">
              <MessageCircleQuestion size={27} />
              <h3>Still Have Questions?</h3>
              <p>We're here to help you find clarity.</p>
              <Link href="/contact" className="text-link">Contact SUSALI <ArrowUpRight size={17} /></Link>
            </div>
          </div>
        </ScrollReveal>
        <FaqExplorer />
      </div>
    </section>
    <CTA small />
  </>;
}