import Link from 'next/link';
import { ArrowUpRight, MessageCircleQuestion } from 'lucide-react';
import { PageHero, SectionTitle, CTA } from '@/components/Shared';
import FaqExplorer from '@/components/FaqExplorer';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Frequently Asked Questions',
  description: "Answers to common questions about SUSALI, healthcare coordination, referrals and network collaboration.",
};

export default function Faqs() {
  return <>
    <PageHero tag="HELPFUL INFORMATION" title="Questions?" accent="We're here to clarify." description="Explore frequently asked questions about our vision, services and approach to connected healthcare." />

    <section className="section-space">
      <div className="container faq-page-layout">
        <ScrollReveal>
          <div className="faq-page-intro">
            <SectionTitle eyebrow="FAQS" title="Everything you" accent="need to know." desc="Browse answers by topic, or get in touch for a conversation about SUSALI." />
            <div className="help-box">
              <MessageCircleQuestion size={27} />
              <h3>Still have a question?</h3>
              <p>We'd be happy to help you find the right information.</p>
              <Link href="/contact" className="text-link">Contact us <ArrowUpRight size={17} /></Link>
            </div>
          </div>
        </ScrollReveal>
        <FaqExplorer />
      </div>
    </section>
    <CTA small />
  </>;
}