import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { Check } from 'lucide-react';

interface ContentSection {
  number: string;
  title: string;
  description: string;
  bulletPoints?: string[];
  image: string;
  imageAlt: string;
}

interface AlternatingContentProps {
  sections: ContentSection[];
}

const AlternatingContent: React.FC<AlternatingContentProps> = ({ sections }) => {
  return (
    <div className="space-y-16 md:space-y-24">
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <ScrollAnimation key={index} direction={isEven ? 'left' : 'right'}>
            <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
              {/* Text Content */}
              <div className={`space-y-4 ${!isEven ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary font-heading font-bold text-lg">{section.number}</span>
                  <div className="h-px bg-primary/30 flex-1 max-w-[60px]" />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  {section.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="space-y-2 pt-2">
                    {section.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Image */}
              <div className={`relative ${!isEven ? 'lg:order-1' : ''}`}>
                <div className="relative group">
                  {/* Decorative border */}
                  <div className={`absolute -inset-3 border-2 border-primary/20 rounded-[20px] ${isEven ? '-rotate-2' : 'rotate-2'}`} />
                  
                  {/* Main image container */}
                  <div className="relative bg-white rounded-[16px] p-4 shadow-lg border border-border overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.imageAlt}
                      className="w-full h-auto rounded-lg transform group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>

                  {/* Decorative accent */}
                  <div className={`absolute ${isEven ? '-bottom-4 -right-4' : '-bottom-4 -left-4'} w-20 h-20 border-4 border-accent rounded-[16px] -z-10`} />
                </div>
              </div>
            </div>
          </ScrollAnimation>
        );
      })}
    </div>
  );
};

export default AlternatingContent;
