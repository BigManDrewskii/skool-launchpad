import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How long does it really take?",
    answer: "10 days. Day 1 is strategy. Days 2-9 are execution. Day 10, you launch."
  },
  {
    question: "What if I don't have content ready?",
    answer: "We'll help you structure it during the strategy call. You bring the expertise, we organize it into a system."
  },
  {
    question: "Do I need technical skills?",
    answer: "No. We handle all setup, design, and configuration. You'll get a ready-to-run community."
  },
  {
    question: "What happens after launch?",
    answer: "You own everything. Run it however you want. We can discuss ongoing support separately if needed."
  },
  {
    question: "Is this right for my niche?",
    answer: "If you have expertise people will pay to learn, yes. We've worked across design, AI, business, and creative fields."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-[hsl(80,8%,8%)] rounded-xl border border-gray-200 dark:border-gray-800 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        FAQ
      </h3>
      <div className="space-y-3">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 dark:border-gray-800 last:border-0 pb-3 last:pb-0"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between text-left group"
            >
              <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                {item.question}
              </span>
              <ChevronDownIcon
                className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform flex-shrink-0 ml-2 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
