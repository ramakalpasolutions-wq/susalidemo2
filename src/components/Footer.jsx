'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, HeartPulse, Mail } from 'lucide-react';
import { site } from '@/data/site';
import MagneticButton from '@/components/MagneticButton';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <motion.footer className="footer" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand"><span className="footer-brand-symbol"><HeartPulse size={21} /></span>SUSALI<span className="brand-dot">.</span></div>
            <p>{f.desc}</p>
            <span className="footer-note">{f.tagline}</span>
          </div>
          <div className="footer-links">
            <div>
              <h4>{f.col1}</h4>
              <Link href="/">{t.nav.home}</Link>
              <Link href="/about">{t.nav.about}</Link>
              <Link href="/services">{t.nav.services}</Link>
              <Link href="/healthcare-network">{t.nav.network}</Link>
            </div>
            <div>
              <h4>{f.col2}</h4>
              <Link href="/faqs">{t.nav.faqs}</Link>
              <Link href="/contact">{t.nav.contact}</Link>
              <h4>{f.col3}</h4>
              <Link href="#">{f.privacy}</Link>
              <Link href="#">{f.terms}</Link>
            </div>
          </div>
          <div className="footer-connect">
            <h4>{t.nav.cta}</h4>
            <p>{f.tagline}</p>
            <MagneticButton>
              <Link className="footer-button" href="/contact">{t.nav.contact} <ArrowUpRight size={17} /></Link>
            </MagneticButton>
            {site.email && <a href={'mailto:' + site.email}><Mail size={15} /> {site.email}</a>}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SUSALI. {f.copyright}</span>
          <span>{f.disclaimer}</span>
        </div>
      </div>
    </motion.footer>
  );
}