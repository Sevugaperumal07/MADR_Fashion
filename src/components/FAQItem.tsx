import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className={cn(
          "font-semibold text-lg transition-colors",
          isOpen ? "text-blue-600" : "text-slate-800 group-hover:text-blue-600"
        )}>
          {question}
        </span>
        <ChevronDown className={cn(
          "w-5 h-5 text-slate-400 transition-transform duration-300",
          isOpen && "rotate-180 text-blue-600"
        )} />
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-40 pb-6" : "max-h-0"
      )}>
        <p className="text-slate-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};
