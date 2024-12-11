import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tempus morbi egest ?",
      answer: "Lorem ipsum dolor sit amet consectetur. Tempus morbi egest as libero pretium pulvinar pretium placerat nec quis."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tempus morbi egest ?",
      answer: "Lorem ipsum dolor sit amet consectetur. Tempus morbi egest as libero pretium pulvinar pretium placerat nec quis."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tempus morbi egest ?",
      answer: "Lorem ipsum dolor sit amet consectetur. Tempus morbi egest as libero pretium pulvinar pretium placerat nec quis."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tempus morbi egest ?",
      answer: "Lorem ipsum dolor sit amet consectetur. Tempus morbi egest as libero pretium pulvinar pretium placerat nec quis."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tempus morbi egest ?",
      answer: "Lorem ipsum dolor sit amet consectetur. Tempus morbi egest as libero pretium pulvinar pretium placerat nec quis."
    }]
  

  
  export default function FAQ() {
    return(

    
    <section className="bg-gray-900 py-20">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold text-white">FAQs</h2>
          <p className="text-yellow-400">Support</p>
        </div>
        <p className="text-gray-400">
          Have a question and don't see the answer below?<br />
          Feel free to contact us at <span className="text-yellow-400">web3smartskiper@gmail.com</span>
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800">
            <AccordionTrigger className="text-white hover:text-yellow-400">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
    )
  }
  
  