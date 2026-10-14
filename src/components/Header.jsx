'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Plus } from 'lucide-react';
const links=[{href:'/',label:'Home'},{href:'/about',label:'About us'},{href:'/services',label:'Services'},{href:'/healthcare-network',label:'Healthcare network'},{href:'/faqs',label:'FAQs'}];
export default function Header(){
 const [open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false);const path=usePathname();
 useEffect(()=>{const update=()=>setScrolled(window.scrollY>15);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update)},[]);
 useEffect(()=>setOpen(false),[path]);
 return <header className={'og-header '+(scrolled?'is-scrolled':'')}>
  <div className="og-nav container">
   <Link href="/" className="og-brand" aria-label="SUSALI home"><span className="og-brand-orb"><Plus size={22} strokeWidth={2.6}/></span><span>SUSALI<small>CONNECTED CARE</small></span></Link>
   <nav className={'og-navigation '+(open?'is-open':'')} id="susali-navigation" aria-label="Main navigation">{links.map(link=><Link key={link.href} href={link.href} className={path===link.href?'active':''} onClick={()=>setOpen(false)}>{link.label}</Link>)}<Link className="og-mobile-contact" href="/contact" onClick={()=>setOpen(false)}>Contact us <ArrowUpRight size={17}/></Link></nav>
   <Link className="og-nav-cta" href="/contact">Let's connect <ArrowUpRight size={17}/></Link>
   <button type="button" className="og-menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="susali-navigation" aria-label={open?'Close navigation':'Open navigation'}>{open?<X size={23}/>:<Menu size={23}/>}</button>
  </div>
 </header>;
}
