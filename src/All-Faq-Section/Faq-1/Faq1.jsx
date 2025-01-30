import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);
  const faqs = [
    {
      question: "What is Meem Token?",
      answer: "Meem Token is a decentralized meme-based cryptocurrency.",
    },
    {
      question: "How can I buy Meem Token?",
      answer: "You can buy Meem Token on supported decentralized exchanges.",
    },
    {
      question: "Is Meem Token safe?",
      answer:
        "Meem Token uses blockchain security features like smart contracts and audits.",
    },
    {
      question: "What is the utility of Meem Token?",
      answer:
        "Meem Token is used for transactions, staking, and governance in the ecosystem.",
    },
    {
      question: "Where can I store Meem Token?",
      answer:
        "You can store Meem Token in any compatible crypto wallet like MetaMask or Trust Wallet.",
    },
  ];

  return (
    <div className=" w-full mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.slice(0, expanded ? faqs.length : 2).map((faq, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-lg">{faq.question}</h3>
            <p className="text-gray-400 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 flex items-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg mx-auto block transition-all"
      >
        {expanded ? "See Less" : "See More"}{" "}
        {expanded ? <FaChevronUp /> : <FaChevronDown />}
      </button>
    </div>
  );
};

export default FAQ;
