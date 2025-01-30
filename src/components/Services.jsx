import { useEffect } from "react";
import { FaPalette, FaMobileAlt } from "react-icons/fa";
import { BsPuzzle } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const services = [
    {
      title: "Funky Animated Websites",
      description:
        "We design vibrant, eye-catching websites packed with animations that stand out.",
      icon: <FaPalette className="text-pink-500 text-4xl" />,
    },
    {
      title: "Pre-Made Components",
      description:
        "Ready-to-use components like Hero, Tokenomics, and Roadmap to speed up your development.",
      icon: <BsPuzzle className="text-blue-500 text-4xl" />,
    },
    {
      title: "Responsive Design",
      description:
        "Our designs are optimized for all devices, ensuring a seamless user experience.",
      icon: <FaMobileAlt className="text-green-500 text-4xl" />,
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".service-card",
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".service-card",
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".service-card:nth-child(odd)",
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".service-card:nth-child(odd)",
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section id="services" className="py-12 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-8">
          Services We Provide
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 hover:bg-gray-700 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
