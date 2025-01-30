import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
            delay: index * 0.2,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="text-white py-16 px-8 md:px-16"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-center mb-12 leading-relaxed">
          Welcome to our platform! We specialize in providing funky, innovative
          solutions to elevate your online presence. Whether you're looking for
          sleek single-page websites, robust components, or tailor-made designs,
          we’ve got you covered.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {["Custom Components", "Funky Designs", "One-Page Websites"].map(
            (title, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform w-72"
              >
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p>
                  {title === "Custom Components"
                    ? "Our library of components is crafted to suit every need. Build faster and smarter with reusable designs."
                    : title === "Funky Designs"
                    ? "Stand out with unique and vibrant designs that make your website unforgettable."
                    : "Get everything you need in a single page. Perfect for modern, fast-loading, and user-friendly experiences."}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
