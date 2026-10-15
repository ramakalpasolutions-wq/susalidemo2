'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ArrowRight, Building2, CalendarCheck2, Check, HeartHandshake, HeartPulse, Network, ShieldCheck, Stethoscope, UsersRound } from 'lucide-react';

const stages = [
  { title: 'Begin Journey', sub: 'Register & Refer', desc: 'Establish your profile and initiate the appropriate healthcare consultation.', icon: HeartHandshake },
  { title: 'Hospital Visit', sub: 'Care & Consultation', desc: 'The appointment is coordinated and your treating professional evaluates your condition.', icon: Building2 },
  { title: 'Medical Records', sub: 'Information Updated', desc: 'Authorized staff upload relevant medical documents and treatment information to your profile.', icon: Activity },
  { title: 'Continued Care', sub: 'Stay Connected', desc: 'Access previous records, review follow-ups and continue using your profile for future visits.', icon: CalendarCheck2 },
];

export function InteractiveJourney() {
  const [active, setActive] = useState(0);
  const Current = stages[active].icon;

  return (
    <div className="og-journey-widget">
      <div className="og-journey-tabs" role="tablist" aria-label="Healthcare journey stages">
        {stages.map((s, i) => (
          <motion.button
            type="button" role="tab" id={'journey-tab-' + i}
            aria-controls="journey-panel" aria-selected={active === i}
            className={active === i ? 'selected' : ''}
            onClick={() => setActive(i)} key={s.title}
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          >
            <span>{String(i + 1).padStart(2, '0')}</span>{s.title}
          </motion.button>
        ))}
      </div>
      <div className="og-journey-display" id="journey-panel" role="tabpanel" aria-labelledby={'journey-tab-' + active}>
        <div className="og-stage-illustration">
          <motion.div className="og-stage-orbit" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} />
          <AnimatePresence mode="wait">
            <motion.span
              key={active} className="og-stage-icon"
              initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Current size={46} strokeWidth={1.65} />
            </motion.span>
          </AnimatePresence>
          <span className="og-stage-satellite sat-a"><HeartPulse size={19} /></span>
          <span className="og-stage-satellite sat-b"><ShieldCheck size={19} /></span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active} className="og-stage-copy"
            initial={{ opacity: 0, x: 30, filter: 'blur(6px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="og-kicker">PHASE {String(active + 1).padStart(2, '0')} / 04</span>
            <h3>{stages[active].title}</h3>
            <strong>{stages[active].sub}</strong>
            <p>{stages[active].desc}</p>
            <motion.button
              type="button" className="og-next-step"
              onClick={() => setActive(v => (v + 1) % stages.length)}
              whileHover={{ x: 4 }} whileTap={{ scale: 0.96 }}
            >
              {active === stages.length - 1 ? 'Start again' : 'Next phase'} <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="og-hero-art" aria-label="Illustration of connected healthcare teams and patient support" role="img" style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div className="og-hero-halo" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }} />
      <motion.div className="og-orb orb-one" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} />
      <motion.div className="og-orb orb-two" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }} />
      <motion.div className="og-orb orb-three" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} />
      <div className="og-ribbon ribbon-one" /><div className="og-ribbon ribbon-two" />

      <motion.div className="og-sculpture" initial={{ opacity: 0, scale: 0.85, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
        <div className="og-sculpture-inner"><div className="og-sculpture-core"><HeartPulse size={86} strokeWidth={1.2} /></div></div>
      </motion.div>

      <motion.div className="og-floating-card og-card-left" initial={{ opacity: 0, x: -40, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        <div className="og-mini-icon mint"><ShieldCheck size={20} /></div>
        <div><span className="og-card-overline">DIGITAL HEALTH PROFILE</span><strong>Your Records, Together.</strong><small>Accessible when you need them.</small></div>
        <span className="og-tiny-check"><Check size={13} /></span>
      </motion.div>

      <motion.div className="og-floating-card og-card-center" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}>
        <div className="og-card-center-heading"><span className="og-mini-icon pink"><Stethoscope size={19} /></span><div><span className="og-card-overline">A BETTER CARE JOURNEY</span><strong>Patients & Doctors, Connected.</strong></div></div>
        <div className="og-care-line"><span><UsersRound size={16} /> Patients</span><span className="og-dot-track"><i /><i /><i /></span><span><Building2 size={16} /> Hospitals</span></div>
        <div className="og-care-chips"><span>Consultations</span><span>Diagnostics</span><span>Follow-ups</span></div>
      </motion.div>

      <motion.div className="og-floating-card og-card-right" initial={{ opacity: 0, x: 40, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.9, delay: 1, ease: [0.22, 1, 0.36, 1] }}>
        <div className="og-chart-header"><span className="og-mini-icon blue"><Activity size={18} /></span><div><strong>Connected Care</strong><small>Simplified healthcare journey.</small></div></div>
        <svg viewBox="0 0 265 95" fill="none" className="og-chart" aria-hidden="true">
          <motion.path d="M0 76 C23 65 30 73 47 51 S77 42 99 53 S134 62 153 36 S190 42 210 20 S247 29 265 8" stroke="#D98EB8" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.2, ease: 'easeInOut' }} />
          <motion.path d="M0 83 C32 78 43 44 66 66 S100 61 123 73 S154 41 178 55 S211 66 237 39 S255 44 265 36" stroke="#7A9FB5" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.4, ease: 'easeInOut' }} />
          <motion.circle cx="210" cy="20" r="5" fill="#D98EB8" stroke="#FFF" strokeWidth="3" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.4, delay: 2.8 }} />
        </svg>
      </motion.div>
    </div>
  );
}