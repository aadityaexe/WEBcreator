import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useContent } from "../../Store/ContentValues";

const FAQ = () => {
  const { content, colors } = useContent(); // ✅ Access the updated state

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

  const faqData = faqs.map((faq, index) => {
    return content.faq && content.faq[index] ? content.faq[index] : faq;
  });

  return (
    <div
      className="w-full mx-auto p-6 shadow-lg"
      style={{
        backgroundColor: colors?.bg || "#111827", // Dynamic background color
      }}
    >
      <h2
        className="text-2xl font-bold mb-4 text-center"
        style={{ color: colors?.h1 || "#ffffff" }} // Dynamic title color
      >
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.slice(0, expanded ? faqs.length : 2).map((faq, index) => (
          <div
            key={index}
            className="p-4 rounded-lg"
            style={{
              backgroundColor: colors?.cardBg || "#1f2937", // Dynamic card background color
              color: colors?.text || "#d1d5db", // Dynamic text color
            }}
          >
            <h3 className="font-semibold text-lg">{faq.question}</h3>
            <p className="mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 flex items-center gap-2 px-4 py-2 rounded-lg mx-auto block transition-all"
        style={{
          backgroundColor: colors?.buttonBg || "#ec4899", // Dynamic button background color
          color: colors?.buttonText || "#ffffff", // Dynamic button text color
        }}
      >
        {expanded ? "See Less" : "See More"}{" "}
        {expanded ? <FaChevronUp /> : <FaChevronDown />}
      </button>
    </div>
  );
};

export default FAQ;
