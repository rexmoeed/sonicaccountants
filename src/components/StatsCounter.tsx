import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Building2, Award, Clock, Shield, Star } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import icaewLogo from '@/assets/icaew-logo.webp';

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Users, value: 500, suffix: '+', label: 'Happy Clients' },
  { icon: Building2, value: 15, suffix: '+', label: 'Years Experience' },
  { icon: Award, value: 98, suffix: '%', label: 'Client Retention' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Support Available' },
];

const AnimatedNumber: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-heading text-4xl md:text-5xl font-bold text-primary">
      {displayValue}{suffix}
    </span>
  );
};

interface StatsCounterProps {
  variant?: 'default' | 'compact' | 'inline';
  showTrustBadges?: boolean;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ variant = 'default', showTrustBadges = true }) => {
  if (variant === 'compact') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.slice(0, 4).map((stat, index) => (
          <div key={index} className="text-center p-4">
            <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            <p className="text-muted-foreground text-xs mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {stats.slice(0, 3).map((stat, index) => (
          <div key={index} className="text-center">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="glass rounded-[20px] p-8 md:p-12 border border-border">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-[14px] bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {showTrustBadges && (
              <div className="border-t border-border pt-8 mt-8">
                <p className="text-center text-muted-foreground text-sm mb-6">Trusted & Accredited</p>
                <div className="flex flex-wrap items-center justify-center gap-8">
                  <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-border">
                    <img src={icaewLogo} alt="ICAEW Registered" className="h-10 w-auto" />
                    <div className="text-left">
                      <p className="font-semibold text-foreground text-sm">ICAEW</p>
                      <p className="text-muted-foreground text-xs">Registered</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border border-border">
                    <Shield className="w-6 h-6 text-green-600" />
                    <div className="text-left">
                      <p className="font-semibold text-foreground text-sm">Data Protected</p>
                      <p className="text-muted-foreground text-xs">ISO 27001</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border border-border">
                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                    <div className="text-left">
                      <p className="font-semibold text-foreground text-sm">5.0 Rating</p>
                      <p className="text-muted-foreground text-xs">Google Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default StatsCounter;
