'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    image: "/Projects/Decoder.jpeg",
    name: "Decoder",
    text: "They understood our project like co-founders.",
  },
  {
    image: "/Projects/LutBox.jpeg",
    name: "LutBox",
    text: "Our brand finally has a visual identity.",
  },
  {
    image: "/Projects/Chad_coin.jpeg",
    name: "Chad coin",
    text: "Our community became active overnight!",
  },
  {
    image: "/Projects/Injective_Birds.jpeg",
    name: "Injective Birds",
    text: "Their management team is always active, even weekends.",
  },
  {
    image: "/Projects/Sugar_Land.jpeg",
    name: "Sugar Land",
    text: "We saw real growth in engagement and followers.",
  },
  {
    image: "/Projects/EaveAI.jpeg",
    name: "EaveAI",
    text: "Our launch blew up, thanks to their raiders!",
  },
  {
    image: "/Projects/KAPPY_Ai.jpeg",
    name: "KAPPY Ai",
    text: "They don't just post content, they write narratives.",
  },
  {
    image: "/Projects/Shazam_Finance.jpeg",
    name: "Shazam Finance",
    text: "Working with them feels like having an internal team.",
  },
  {
    image: "/Projects/Doge_caucus.jpeg",
    name: "Doge caucus",
    text: "Designs? Clean, Web3-native, and on-brand.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[index];

  return (
    <section id ='testimonials' className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-left"
        >
          What They Say About Us
        </motion.h2>

        <div className="bg-gray-800 rounded-xl p-8 relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name} testimonial`}
                className="rounded-xl object-cover w-full h-[400px] mb-8"
              />

              <p className="text-gray-300 mb-6 text-lg italic">“{testimonial.text}”</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-12 h-12 object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">Web3 Partner</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-8 right-8 flex gap-2">
            <button
              onClick={handlePrev}
              className="bg-gray-700 p-2 rounded-full hover:bg-yellow-500 transition"
            >
              <ChevronLeft className="text-white" />
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-700 p-2 rounded-full hover:bg-yellow-500 transition"
            >
              <ChevronRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
