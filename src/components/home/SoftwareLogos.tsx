import React from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';
import xeroLogo from '@/assets/xero-logo.png';
import quickbooksLogo from '@/assets/quickbooks-logo.jpg';
import freeagentLogo from '@/assets/freeagent-logo.png';
import zohoBooksLogo from '@/assets/Zohobooks.jpeg';
import sageLogo from '@/assets/sage.jpeg';

const SoftwareLogos: React.FC = () => {
  const logos = [
    { name: 'Xero', src: xeroLogo },
    { name: 'QuickBooks', src: quickbooksLogo },
    { name: 'FreeAgent', src: freeagentLogo },
    { name: 'Zoho Books', src: zohoBooksLogo },
    { name: 'Sage', src: sageLogo },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              Tools & Software We Use
            </h2>
            <p className="text-muted-foreground">
              We work with industry-leading cloud accounting platforms
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <ScrollAnimation key={logo.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-[20px] p-6 hover:shadow-lg transition-all cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareLogos;