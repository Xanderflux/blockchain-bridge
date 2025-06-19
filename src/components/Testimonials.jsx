'use client';

import { motion } from 'framer-motion';

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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 tracking-wide "
        >
          What They Say About Us
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-400/20 transition-shadow duration-300 overflow-hidden hover:scale-[1.03] transform"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="mb-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <p className="text-white text-lg leading-relaxed mb-4">
                &quot;{testimonial.text}&quot;
              </p>
              <p className="text-yellow-400 font-semibold text-right">
                — {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
