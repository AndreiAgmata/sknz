import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import faqsData from "../../../public/data/faqs.json";

function Faq() {
  return (
    <section className="faq container mx-auto my-16">
      <h1 className="font-bold text-4xl text-center mb-10">Faqs</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqsData.map((faq, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger className="text-start">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default Faq;
