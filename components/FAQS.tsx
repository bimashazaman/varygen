import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQS() {
  return (
    <div className='md:px-20 px-6 lg:px-44'>
      <h2 className='text-3xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 dark:from-teal-300 dark:to-indigo-400'>
        Frequently Asked About VaryGen
      </h2>

      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>How does VaryGen work?</AccordionTrigger>
          <AccordionContent>
            VaryGen leverages advanced AI algorithms to transform your ideas
            into reality, offering a suite of tools to optimize your workflow
            seamlessly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Is my data secure with VaryGen?</AccordionTrigger>
          <AccordionContent>
            Absolutely. We prioritize user data privacy and have implemented
            stringent security measures to ensure your data is protected at all
            times.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>
            Can I cancel my subscription anytime?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you have the freedom to cancel your subscription whenever you
            wish. There are no long-term contracts or hidden fees.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger>
            How does the 5 free tasks offer work?
          </AccordionTrigger>
          <AccordionContent>
            New users can explore VaryGen's capabilities with 5 tasks for free,
            without any commitments. This allows you to experience our product
            firsthand before making any decisions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
