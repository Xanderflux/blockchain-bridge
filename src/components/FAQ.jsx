import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "What is BlockchainBridgeWay?",
      answer: "BlockchainBridgeWay is a full-service Web3 agency that helps startups and established projects build, grow, and scale in the blockchain ecosystem. We offer services in strategy, branding, community development, content, analytics, and more."
    },
    {
      question: "Who can work with BlockchainBridgeWay?",
      answer: "We work with: Web3 startups, NFT and DeFi projects, DAOs, Blockchain protocols, Enterprises looking to transition into Web3, Individuals with big ideas and a desire to build and more."
    },
    {
      question: "How do you build communities?",
      answer: "We set up and manage active communities on Discord, Telegram, X (Twitter), and more. Our team deploys bots, engages users in real time, hosts AMAs, and moderates conversations to keep the community alive and safe."
    },
    {
      question: "Can I hire BlockchainBridge for just one service?",
      answer: "Yes! We offer both end-to-end packages and individual services, from just community management or UI/UX design to full project strategy and tokenomics."
    },
    {
      question: "What’s your pricing model?",
      answer: "Our pricing is flexible and customised based on your project’s scope, goals, and duration. We offer competitive rates with high value. Reach out for a tailored quote."
    },
    {
      question: "How long does it take to get started?",
      answer: "Once we understand your project and sign the agreement, onboarding begins within 1–3 business days. We move quickly without compromising quality."
    },
    {
      question: "Do you provide long-term support?",
      answer: "Yes. We believe in long-term partnerships, not just short-term gigs. We offer ongoing support, community monitoring, reporting, and growth strategy updates."
    }
  ]
  

  
  export default function FAQ() {
    return(
    <section id="faq" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-12 flex-col md:flex-row md:items-center md:text-left text-left">
        <div className="mb-6 md:mb-0">
        <h2 className="text-3xl font-bold text-yellow-400 text-left">FAQs</h2>
        <p className="text-white text-left">Support</p>
        </div>
        <p className="text-gray-400 ml-0 md:ml-9 text-left">
        Have a question and don&apos;t see the answer below?<br />
        Feel free to contact us at 
          <span className="text-white font-bold hover:text-yellow-400 hover:cursor-pointer ">
          <div className="flex items-center gap-2">
            <img src="/blockchain bridge logo.png" alt="BlockchainBridgeWay" className="w-8 h-8" />
            BlockchainBridgeWay
          </div>
          </span>
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4 text-left">
        {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800">
          <AccordionTrigger className="text-white hover:text-yellow-400 hover:no-underline text-left">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-gray-400 text-left">
          {faq.answer}
          </AccordionContent>
        </AccordionItem>
        ))}
      </Accordion>
      </div>
    </section>
    )
  }
  
  