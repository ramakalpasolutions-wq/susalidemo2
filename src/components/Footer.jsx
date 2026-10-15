'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, HeartPulse, Mail } from 'lucide-react';
import { site } from '@/data/site';
import MagneticButton from '@/components/MagneticButton';

export default function Footer() {
  return (
    <motion.footer className="footer" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand"><span className="footer-brand-symbol"><HeartPulse size={21} /></span>SUSALI<span className="brand-dot">.</span></div>
            <p>Connecting patients, medical professionals and participating healthcare institutions through thoughtful coordination and organized digital health information.</p>
            <span className="footer-note">Bridging the Gap Between Patients and Doctors.</span>
          </div>
          <div className="footer-links">
            <div><h4>Explore</h4><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/services">Services</Link><Link href="/healthcare-network">Healthcare Network</Link></div>
            <div><h4>Support</h4><Link href="/faqs">Frequently Asked Questions</Link><Link href="/contact">Contact Us</Link><h4>Information</h4><Link href="#">Privacy Policy</Link><Link href="#">Terms of Use</Link></div>
          </div>
          <div className="footer-connect">
            <h4>Connect with us</h4>
            <p>Interested in learning more about SUSALI or exploring collaboration?</p>
            <MagneticButton>
              <Link className="footer-button" href="/contact">Get in Touch <ArrowUpRight size={17} /></Link>
            </MagneticButton>
            {site.email && <a href={'mailto:' + site.email}><Mail size={15} /> {site.email}</a>}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SUSALI. All rights reserved.</span>
          <span>SUSALI facilitates healthcare coordination and information access. Medical diagnosis and treatment remain the responsibility of qualified healthcare professionals.</span>
        </div>
      </div>
    </motion.footer>
  );
}