import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ScrollAnimation from '@/components/ScrollAnimation';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ title = 'Frequently Asked Questions', faqs }) => {
  return (
    <ScrollAnimation direction="up">
      <div className="glass rounded-[20px] p-6 md:p-8 border border-border">
        <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6">{title}</h2>
        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-4 bg-background/50"
            >
              <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </ScrollAnimation>
  );
};

export default FAQSection;
