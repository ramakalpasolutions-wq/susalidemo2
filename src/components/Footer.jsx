import Link from 'next/link';
import { ArrowUpRight, HeartPulse, Linkedin, Mail } from 'lucide-react';
import { site } from '@/data/site';
export default function Footer(){return <footer className="footer"><div className="container"><div className="footer-top">
 <div><div className="footer-brand"><span className="footer-brand-symbol"><HeartPulse size={21}/></span>SUSALI<span className="brand-dot">.</span></div><p>Bringing people, care pathways and healthcare organizations closer together.</p><span className="footer-note">Healthcare, better connected.</span></div>
 <div className="footer-links"><div><h4>Explore</h4><Link href="/">Home</Link><Link href="/about">About SUSALI</Link><Link href="/services">Our services</Link></div><div><h4>Discover</h4><Link href="/healthcare-network">Healthcare network</Link><Link href="/faqs">FAQs</Link><Link href="/contact">Contact us</Link></div></div>
 <div className="footer-connect"><h4>Connect with us</h4><p>Interested in learning more about SUSALI or exploring collaboration?</p><Link className="footer-button" href="/contact">Start a conversation <ArrowUpRight size={17}/></Link>{site.email&&<a href={'mailto:'+site.email}><Mail size={15}/> {site.email}</a>}</div>
 </div><div className="footer-bottom"><span>© {new Date().getFullYear()} SUSALI. All rights reserved.</span><span>Information only · Not for medical emergencies</span></div></div></footer>}
