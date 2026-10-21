
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Activity,
  ArrowRight,
  Building2,
  CalendarCheck2,
  Check,
  HeartHandshake,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  User,
} from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

const stageIcons = [
  HeartHandshake,
  Building2,
  Activity,
  CalendarCheck2,
];

export function InteractiveJourney() {
  const { t } = useLanguage();

  const [active, setActive] = useState(0);

  const stages = t.interactiveJourney;
  const Current = stageIcons[active];

  return (
    <div className="og-journey-widget">
      <div
        className="og-journey-tabs"
        role="tablist"
        aria-label={t.journeyUi.stagesLabel}
      >
        {stages.map((s, i) => (
          <motion.button
            type="button"
            role="tab"
            id={'journey-tab-' + i}
            aria-controls="journey-panel"
            aria-selected={active === i}
            className={
              active === i ? 'selected' : ''
            }
            onClick={() => setActive(i)}
            key={i}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>
              {String(i + 1).padStart(2, '0')}
            </span>
            {s.title}
          </motion.button>
        ))}
      </div>

      <div
        className="og-journey-display"
        id="journey-panel"
        role="tabpanel"
        aria-labelledby={'journey-tab-' + active}
      >
        <div className="og-stage-illustration">
          <motion.div
            className="og-stage-orbit"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <AnimatePresence mode="wait">
            <motion.span
              key={active}
              className="og-stage-icon"
              initial={{
                opacity: 0,
                scale: 0.6,
                rotate: -20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.6,
                rotate: 20,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Current
                size={46}
                strokeWidth={1.65}
              />
            </motion.span>
          </AnimatePresence>

          <span className="og-stage-satellite sat-a">
            <HeartPulse size={19} />
          </span>

          <span className="og-stage-satellite sat-b">
            <ShieldCheck size={19} />
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${active}-${t.journeyUi.phase}`}
            className="og-stage-copy"
            initial={{
              opacity: 0,
              x: 30,
              filter: 'blur(6px)',
            }}
            animate={{
              opacity: 1,
              x: 0,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              x: -20,
              filter: 'blur(4px)',
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="og-kicker">
              {t.journeyUi.phase}{' '}
              {String(active + 1).padStart(2, '0')}
              {' / 04'}
            </span>

            <h3>{stages[active].title}</h3>
            <strong>{stages[active].sub}</strong>
            <p>{stages[active].desc}</p>

            <motion.button
              type="button"
              className="og-next-step"
              onClick={() =>
                setActive(
                  (v) => (v + 1) % stages.length
                )
              }
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.96 }}
            >
              {active === stages.length - 1
                ? t.journeyUi.again
                : t.journeyUi.next}{' '}
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function HeroVisual() {
  const { t } = useLanguage();
  const v = t.heroVisual;

  const ecgPink =
    'M0 28 L18 28 C22 28 24 24 28 24 C32 24 34 28 38 28 L48 28 L52 32 L58 8 L64 48 L70 28 L82 28 C88 28 92 20 98 20 C104 20 108 28 114 28 L130 28 C134 28 136 24 140 24 C144 24 146 28 150 28 L160 28 L164 32 L170 8 L176 48 L182 28 L194 28';

  const ecgBlue =
    'M0 38 L22 38 C26 38 28 34 32 34 C36 34 38 38 42 38 L52 38 L56 42 L62 18 L68 52 L74 38 L88 38 C94 38 98 30 104 30 C110 30 114 38 120 38 L138 38 L142 38 L168 38 L172 42 L178 18 L184 52 L190 38 L200 38';

  return (
    <div className="og-hero-visual-container">
      {/* Floating decorative circles */}
      <motion.div
        className="og-3d-orb orb-teal"
        animate={{
          y: [0, -12, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="og-3d-orb orb-purple"
        animate={{
          y: [0, 14, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Digital profile card */}
      <motion.div
        className="og-card-glass og-card-left-float"
        initial={{ opacity: 0, y: 25 }}
        animate={{
          opacity: 1,
          y: [0, -8, 0],
        }}
        transition={{
          opacity: {
            duration: 0.8,
            delay: 0.3,
          },
          y: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <div className="og-card-icon-badge mint">
          <ShieldCheck size={20} />
        </div>

        <div className="og-card-text-group">
          <span className="og-card-kicker">
            {v.digitalProfile}
          </span>

          <strong>{v.recordsTitle}</strong>
          <small>{v.recordsSub}</small>
        </div>

        <span className="og-check-pill">
          <Check size={13} />
        </span>
      </motion.div>

      {/* Patients and doctors card */}
      <motion.div
        className="og-card-glass og-card-center-hero"
        initial={{ opacity: 0, y: 35 }}
        animate={{
          opacity: 1,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: {
            duration: 0.8,
            delay: 0.5,
          },
          y: {
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          },
        }}
      >
        <div className="og-card-header-styled">
          <span className="og-card-icon-badge pink">
            <Stethoscope size={18} />
          </span>

          <div>
            <span className="og-card-kicker">
              {v.betterCare}
            </span>
            <h3>{v.patientsDoctors}</h3>
          </div>
        </div>

        <div className="og-pills-flex">
          <span className="og-pill-tag light">
            <User size={13} />
            {v.patients}
          </span>

          <span className="og-pill-tag light">
            <Stethoscope size={13} />
            {v.doctors}
          </span>

          <span className="og-pill-tag light">
            <Building2 size={13} />
            {v.hospitals}
          </span>
        </div>

        <div className="og-subpills-row">
          <span>{v.consultations}</span>
          <span>{v.diagnostics}</span>
          <span>{v.followups}</span>
        </div>
      </motion.div>

      {/* Connected care ECG card */}
      <motion.div
        className="og-card-glass og-card-right-float"
        initial={{ opacity: 0, y: 25 }}
        animate={{
          opacity: 1,
          y: [0, -7, 0],
        }}
        transition={{
          opacity: {
            duration: 0.8,
            delay: 0.7,
          },
          y: {
            duration: 6.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          },
        }}
      >
        <div className="og-card-header-styled">
          <span className="og-card-icon-badge blue">
            <Activity size={18} />
          </span>

          <div>
            <strong>{v.connectedCare}</strong>
            <small>{v.simplifiedJourney}</small>
          </div>
        </div>

        <svg
          viewBox="0 0 200 55"
          fill="none"
          className="og-ecg-svg"
        >
          <motion.path
            d={ecgPink}
            stroke="#D98EB8"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: 'easeInOut',
            }}
          />

          <motion.path
            d={ecgBlue}
            stroke="#7A9FB5"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: 1.2,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
