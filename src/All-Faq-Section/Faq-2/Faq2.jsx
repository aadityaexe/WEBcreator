import { useState } from "react";
import { useContent } from "../../Store/ContentValues";

const FAQ2 = () => {
  const { content, colors } = useContent();
  const [showMore, setShowMore] = useState(false);

  const toggleFAQ = () => {
    setShowMore(!showMore);
  };

  return (
    <section
      id="faq"
      className="py-20 text-center overflow-x-hidden"
      style={{ background: colors.bg }}
    >
      <h2 className="text-6xl font-bold mb-10" style={{ color: colors.h1 }}>
        FAQ
      </h2>
      <div className="max-w-2xl mx-auto">
        {content.faq.map((item, index) => (
          <div
            key={index}
            className="text-5xl mb-4"
            style={{ color: colors.p }}
          >
            <p>
              <span className="text-[#FF7F50]">
                Q{index + 1}: {item.question}
              </span>
              <br />
              {item.answer}
            </p>
          </div>
        ))}
        {/* Toggle button */}
        <button
          onClick={toggleFAQ}
          className="mt-6 px-8 py-3 text-white rounded-full text-2xl font-semibold shadow-lg transition-transform transform hover:scale-105"
          style={{ background: colors.gradient }}
        >
          {showMore ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
};

export default FAQ2;
