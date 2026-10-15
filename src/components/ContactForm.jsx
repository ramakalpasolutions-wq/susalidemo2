'use client';
import { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { site } from '@/data/site';
import MagneticButton from '@/components/MagneticButton';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();
  const c = t.contact;
  const [values, setValues] = useState({ name: '', email: '', phone: '', topic: c.topics[0], message: '' });
  const [copied, setCopied] = useState(false);
  
  const content = `SUSALI Enquiry\nName: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nTopic: ${values.topic}\n\n${values.message}`;

  function submit(e) {
    e.preventDefault();
    if (site.email) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('SUSALI — ' + values.topic)}&body=${encodeURIComponent(content)}`;
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(content)
        .then(() => { setCopied(true); setTimeout(() => setCopied(false), 3500); })
        .catch(() => { window.location.href = `mailto:?subject=${encodeURIComponent('SUSALI enquiry')}&body=${encodeURIComponent(content)}`; });
    } else {
      window.location.href = `mailto:?subject=${encodeURIComponent('SUSALI enquiry')}&body=${encodeURIComponent(content)}`;
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label>{c.labels.name} <span>*</span>
          <input required value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} placeholder={c.labels.name} />
        </label>
        <label>{c.labels.email} <span>*</span>
          <input required type="email" value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} placeholder="you@example.com" />
        </label>
      </div>
      <label>{c.labels.phone}
        <input type="tel" value={values.phone} onChange={e => setValues({ ...values, phone: e.target.value })} placeholder="+91..." />
      </label>
      <label>{c.labels.topic}
        <select value={values.topic} onChange={e => setValues({ ...values, topic: e.target.value })}>
          {c.topics.map(tp => (
            <option key={tp}>{tp}</option>
          ))}
        </select>
      </label>
      <label>{c.labels.message} <span>*</span>
        <textarea rows="5" required minLength={10} value={values.message} onChange={e => setValues({ ...values, message: e.target.value })} placeholder={c.labels.message} />
      </label>
      <MagneticButton>
        <button className="btn btn-primary submit-btn" type="submit">
          {copied ? c.btnCopied : c.btnPrepare}{' '}
          {copied ? <Check size={18} /> : <ArrowUpRight size={18} />}
        </button>
      </MagneticButton>
      <p className="form-disclaimer">{c.privacyDisclaimer}</p>
    </form>
  );
}