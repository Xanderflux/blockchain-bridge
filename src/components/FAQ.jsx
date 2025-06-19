'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is BlockchainBridgeWay?",
    answer:
      "BlockchainBridgeWay is a full-service Web3 agency that helps startups and established projects build, grow, and scale in the blockchain ecosystem. We offer services in strategy, branding, community development, content, analytics, and more.",
  },
  {
    question: "Who can work with BlockchainBridgeWay?",
    answer:
      "We work with: Web3 startups, NFT and DeFi projects, DAOs, Blockchain protocols, Enterprises looking to transition into Web3, Individuals with big ideas and a desire to build and more.",
  },
  {
    question: "How do you build communities?",
    answer:
      "We set up and manage active communities on Discord, Telegram, X (Twitter), and more. Our team deploys bots, engages users in real time, hosts AMAs, and moderates conversations to keep the community alive and safe.",
  },
  {
    question: "Can I hire BlockchainBridge for just one service?",
    answer:
      "Yes! We offer both end-to-end packages and individual services, from just community management or UI/UX design to full project strategy and tokenomics.",
  },
  {
    question: "What’s your pricing model?",
    answer:
      "Our pricing is flexible and customised based on your project’s scope, goals, and duration. We offer competitive rates with high value. Reach out for a tailored quote.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "Once we understand your project and sign the agreement, onboarding begins within 1–3 business days. We move quickly without compromising quality.",
  },
  {
    question: "Do you provide long-term support?",
    answer:
      "Yes. We believe in long-term partnerships, not just short-term gigs. We offer ongoing support, community monitoring, reporting, and growth strategy updates.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-gray-900 py-16 sm:py-20">
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between mb-8 md:mb-12 gap-6"
        >
          <div className="mb-2 md:mb-0 text-left">
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-yellow-400">FAQs</h2>
            <p className="text-white text-base xs:text-lg">Support</p>
          </div>
          <div className="text-gray-400 text-left md:text-right max-w-full md:max-w-lg">
            <p className="mb-1 xs:mb-2 text-sm xs:text-base">
              Have a question and don&apos;t see the answer below?
            </p>
            <p className="inline-flex items-center gap-2 text-white text-xs xs:text-sm md:text-base flex-wrap">
              Feel free to contact us at{" "}
              <span
                className="inline-flex items-center gap-2 font-bold cursor-pointer hover:text-yellow-400 text-xs xs:text-sm md:text-xl"
              >
                <img
                  src="/blockchain bridge logo.png"
                  alt="BlockchainBridgeWay"
                  className="w-6 h-6 xs:w-7 xs:h-7 rounded-full"
                />
                BlockchainBridgeWay
              </span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3 xs:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-b border-gray-800"
                >
                  <AccordionTrigger className="text-white hover:text-yellow-400 text-left hover:no-underline text-base xs:text-lg md:text-xl font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-left text-sm xs:text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
