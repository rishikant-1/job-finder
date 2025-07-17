import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

const faqs = [
  {
    id: 1,
    question: 'Can I upload a CV?',
    answer: 'Yes, you can upload your CV directly during the registration or job application process. Supported formats include PDF and DOCX.',
  },
  {
    id: 2,
    question: 'How long will the recruitment process take?',
    answer: 'The recruitment process varies by company, but typically it takes between 1 to 3 weeks depending on the role and number of interview rounds.',
  },
  {
    id: 3,
    question: 'What does the recruitment and selection process involve?',
    answer: 'It usually includes application review, shortlisting, one or more interviews (technical/HR), and final selection based on company-specific criteria.',
  },
  {
    id: 4,
    question: 'Do you recruit for Graduates, Apprentices and Students?',
    answer: 'Yes, we provide job listings suitable for fresh graduates, apprentices, and students looking for internships or entry-level roles.',
  },
  {
    id: 5,
    question: 'Can I receive notifications for any future jobs that may interest me?',
    answer: 'Absolutely! You can enable job alerts in your profile settings to receive email or in-app notifications for new job postings.',
  },
];

function Faq() {
  const [active, setActive] = useState(1);

  const toggle = (id) => {
    setActive(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-5xl mx-auto lg:px-20 md:px-10 px-4 lg:py-30 md:py-20 py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Find answers to the most commonly asked questions.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map(({ id, question, answer }) => (
          <div key={id} className={`border rounded-xl overflow-hidden ${active === id ? 'bg-[#e7f7f6]' : 'bg-white'}`}>
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => toggle(id)}
            >
              <div className="flex gap-4 items-start">
                <span className="text-[#0f766e] font-semibold">{String(id).padStart(2, '0')}</span>
                <p className="font-medium text-gray-900">{question}</p>
              </div>
              <div className="text-[#0f766e]">
                {active === id ? <FaTimes /> : <FaPlus />}
              </div>
            </div>
            {active === id && (
              <div className="px-14 pb-4 text-sm text-gray-700 leading-relaxed">
                {answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
