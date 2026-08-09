import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm font-medium max-w-2xl mx-auto">
            Everything you need to know about Messwala tiffin subscriptions, meal pauses, and home kitchen partnerships.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? 'border-red-300 shadow-lg shadow-red-100/50'
                  : 'border-slate-200 hover:border-orange-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    openIndex === index ? 'bg-red-500' : 'bg-slate-100'
                  }`}>
                    <span className={`text-sm font-bold ${
                      openIndex === index ? 'text-white' : 'text-slate-500'
                    }`}>
                      {index + 1}
                    </span>
                  </div>
                  <h3 className={`text-sm sm:text-base font-semibold pr-4 ${
                    openIndex === index ? 'text-red-600' : 'text-slate-800'
                  }`}>
                    {faq.question}
                  </h3>
                </div>
                <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : 'rotate-0'
                }`}>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-red-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="pl-12 pr-4">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 border border-orange-100">
            <MessageCircle className="w-10 h-10 text-red-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Our support team is available 24/7 to help you with your tiffin subscription.
            </p>
            <a
              href="tel:+919823011200"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition-all shadow-lg shadow-red-500/25"
            >
              <span>Call Support</span>
              <span className="text-sm font-normal">+91 98230 11200</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
