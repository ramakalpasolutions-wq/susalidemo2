'use client';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { PageHero, Eyebrow } from '@/components/Shared';
import ContactForm from '@/components/ContactForm';
import { site } from '@/data/site';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  return <>
    <PageHero tag={c.heroTag} title={c.heroTitle} accent={c.heroAccent} description={c.heroDesc} />

    <section className="section-space">
      <div className="container contact-layout">
        <div>
          <ScrollReveal direction="left">
            <div className="contact-aside">
              <Eyebrow>{c.asideKicker}</Eyebrow>
              <h2>{c.asideTitle1}<br /><span className="blue-text">{c.asideTitle2}</span></h2>
              <p>{c.asideP1}</p>
              <p>{c.asideP2}</p>
              <div className="contact-methods">
                {site.email && <a href={'mailto:' + site.email}><span><Mail size={22} /></span><div><small>EMAIL US</small><strong>{site.email}</strong></div><ArrowUpRight size={18} /></a>}
                {site.phone && <a href={'tel:' + site.phone}><span><Phone size={22} /></span><div><small>CALL US</small><strong>{site.phone}</strong></div><ArrowUpRight size={18} /></a>}
                {site.address && <div className="contact-method-static"><span><MapPin size={22} /></span><div><small>VISIT US</small><strong>{site.address}</strong></div></div>}
                {!site.email && !site.phone && !site.address && <div className="contact-pending"><Mail size={24} /><strong>{t.common.pendingTitle}</strong><p>{t.common.pendingDesc}</p></div>}
              </div>
              <div className="contact-small-note">{c.asideEmergencyNote}</div>
            </div>
          </ScrollReveal>
        </div>
        
        <div>
          <ScrollReveal direction="right">
            <div className="contact-form-shell">
              <div className="contact-form-heading"><span>{c.formKicker}</span><h3>{c.formTitle}</h3><p>{c.formDesc}</p></div>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </>;
}