
'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function TextReveal({
  text,
  className = '',
  delay = 0,
}) {
  const { lang } = useLanguage();

  if (!text) return null;

  if (lang === 'te') {
    return (
      <motion.span
        className={`inline ${className}`}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          display: 'inline-block',
          lineHeight: 'inherit',
          overflow: 'visible',
        }}
      >
        {text}
      </motion.span>
    );
  }

  const words = text.split(' ');

  return (
    <span className={`inline ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{
            verticalAlign: 'bottom',
            paddingBottom: '0.06em',
          }}
        >
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>

          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  );
}
