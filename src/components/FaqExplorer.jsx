'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/site';

export default function FaqExplorer({ limit = 0 }) {
  const [active, setActive] = useState('All');
  const [opened, setOpened] = useState(-1);
  const categories = ['All', 'General', 'Services', 'Network'];
  const filtered = (active === 'All' ? faqs : faqs.filter(x => x.category === active));
  const items = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="faq-explorer">
      {!limit && (
        <div className="faq-filters" role="group" aria-label="Filter questions">
          {categories.map(cat => (
            <motion.button
              type="button" key={cat}
              aria-pressed={active === cat}
              className={active === cat ? 'selected' : ''}
              onClick={() => { setActive(cat); setOpened(-1); }}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      )}
      <div className="faq-list">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.div
              key={item.q}
              className={'faq-item ' + (opened === i ? 'faq-open' : '')}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              layout
            >
              <button type="button" aria-expanded={opened === i} onClick={() => setOpened(opened === i ? -1 : i)}>
                <span>{item.q}</span>
                <motion.span
                  className="faq-toggle"
                  animate={{ rotate: opened === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {opened === i ? <Minus size={18} /> : <Plus size={18} />}
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {opened === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}