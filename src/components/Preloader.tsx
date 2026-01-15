import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import headerLogo from '@/assets/header-logo.png';

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="preloader"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <motion.img
              src={headerLogo}
              alt="Sonic Accountants"
              className="h-24 md:h-32 w-auto preloader-logo"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '200px' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mt-6"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;