'use client';

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  { title: "Chad coin", image: "/Projects/Chad_coin.jpeg", href: "#" },
  { title: "Decoder", image: "/Projects/Decoder.jpeg", href: "#" },
  { title: "Doge caucus", image: "/Projects/Doge_caucus.jpeg", href: "#" },
  { title: "EaveAI", image: "/Projects/EaveAI.jpeg", href: "#" },
  { title: "Injective Birds", image: "/Projects/Injective_Birds.jpeg", href: "#" },
  { title: "KAPPY Ai", image: "/Projects/KAPPY_Ai.jpeg", href: "#" },
  { title: "LutBox", image: "/Projects/LutBox.jpeg", href: "#" },
  { title: "Shazam Finance", image: "/Projects/Shazam_Finance.jpeg", href: "#" },
  { title: "Sugar Land", image: "/Projects/Sugar_Land.jpeg", href: "#" },
];

export default function Projects() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 318;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (direction === "right") {
      container.scrollLeft = container.scrollLeft >= maxScroll ? 0 : container.scrollLeft + scrollAmount;
    } else {
      container.scrollLeft = container.scrollLeft <= 0 ? maxScroll : container.scrollLeft - scrollAmount;
    }
  };

  return (
    <section id="projects" className="bg-gray-800 py-16">
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-yellow-400 mb-12 tracking-wide"
        >
          Projects We have Completed
        </motion.h2>

        <button
          type="button"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900 bg-opacity-70 rounded-full p-3 hover:bg-yellow-400 transition-colors"
          onClick={() => handleScroll("left")}
        >
          <ChevronLeft size={36} className="text-white" />
        </button>

        <button
          type="button"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900 bg-opacity-70 rounded-full p-3 hover:bg-yellow-400 transition-colors"
          onClick={() => handleScroll("right")}
        >
          <ChevronRight size={36} className="text-white" />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative min-w-[300px] flex-shrink-0 mx-6 snap-center overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-xl font-semibold text-center">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
