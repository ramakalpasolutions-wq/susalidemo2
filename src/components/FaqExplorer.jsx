'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/site';
export default function FaqExplorer({limit=0}){
 const [active,setActive]=useState('All');const [opened,setOpened]=useState(0);
 const categories=['All','General','Services','Network'];const filtered=(active==='All'?faqs:faqs.filter(x=>x.category===active));const items=limit?filtered.slice(0,limit):filtered;
 return <div className="faq-explorer">{!limit&&<div className="faq-filters" role="group" aria-label="Filter questions">{categories.map(cat=><button type="button" key={cat} aria-pressed={active===cat} className={active===cat?'selected':''} onClick={()=>{setActive(cat);setOpened(-1)}}>{cat}</button>)}</div>}<div className="faq-list">{items.map((item,i)=><div key={item.q} className={'faq-item '+(opened===i?'faq-open':'')}><button type="button" aria-expanded={opened===i} onClick={()=>setOpened(opened===i?-1:i)}><span>{item.q}</span><span className="faq-toggle">{opened===i?<Minus size={18}/>:<Plus size={18}/>}</span></button>{opened===i&&<div className="faq-answer"><p>{item.a}</p></div>}</div>)}</div></div>
}
