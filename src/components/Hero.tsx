import React from 'react';
import { motion } from 'motion/react';
import { useLocalization } from '../LocalizationContext';
import { openWhatsApp } from '../utils';

interface HeroProps {
  greeting: string;
}

export const Hero: React.FC<HeroProps> = ({ greeting }) => {
  const { t } = useLocalization();
  const [showVideo, setShowVideo] = React.useState(false);

  React.useEffect(() => {
    const timer = window.setTimeout(() => setShowVideo(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  const handleTransferInquiry = () => {
    openWhatsApp([
      'Hello COCO MORIS ADVENTURES,',
      '',
      'I would like to book an airport transfer.',
      '',
      'Please contact me to confirm the details.',
    ].join('\n'));
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/excursions/hero-bg.png"
          alt="Mauritius coastal view"
          className="h-full w-full object-cover"
          decoding="async"
          fetchPriority="high"
        />

        {showVideo && (
          <iframe
            src="https://player.vimeo.com/video/1180730087?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&title=0&byline=0&portrait=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full"
            title="COCO MORIS ADVENTURES Adventures"
          />
        )}
      </div>

      <div className="absolute inset-0 bg-obsidian/50 z-0" />

      {/* Content */}
      <div className="relative flex h-full items-center justify-center px-6 text-center z-10">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-gold"
          >
            {greeting}, {t('hero.subtitle')}
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-8 font-serif text-5xl font-light tracking-tight text-alabaster md:text-8xl"
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto mb-12 max-w-xl text-sm leading-relaxed tracking-wide text-alabaster/60 md:text-base"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button type="button" onClick={handleTransferInquiry} className="btn-premium">
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
