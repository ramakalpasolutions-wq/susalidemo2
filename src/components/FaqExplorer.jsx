'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/site';

export default function FaqExplorer({ limit = 0 }) {
  const [active, setActive] = useState('All');
  const [opened, setOpened] = useState(-1);
  
  // Dynamically extract categories from the faqs array
  const categories = ['All', ...new Set(faqs.map(f => f.category))];
  
  const filtered = (active === 'All' ? faqs : faqs.filter(x => x.category === active));
  const items = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="faq-explorer">
      {!limit && (
        <div className="faq-filters" role="group">
          {categories.map(cat => (
            <button
              type="button" key={cat}
              className={active === cat ? 'selected' : ''}
              onClick={() => { setActive(cat); setOpened(-1); }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
      <div className="faq-list">
        {items.map((item, i) => (
          <div key={item.q} className={'faq-item ' + (opened === i ? 'faq-open' : '')}>
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
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}