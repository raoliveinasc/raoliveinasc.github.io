import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';
  
// import 'react-accessible-accordion/dist/fancy-example.css';

const accordionItems = [
    {
      uuid: 1,
      heading: 'Como funciona a OttoMotos?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      uuid: 2,
      heading: 'Como funciona a OttoMotos?',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      uuid: 3,
      heading: 'Como funciona a OttoMotos?',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];

export default function AccordionOtto() {

    return (

        <div className='faq-section'>
          <div className='faq-title'>FAQ</div>
          <div className='faq-questions-surround'>
              <Accordion allowZeroExpanded>
                  {accordionItems.map((item) => (
                      <AccordionItem key={item.uuid}>
                          <AccordionItemHeading>
                              <AccordionItemButton>
                                  {item.heading}
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                          {item.content}
                          </AccordionItemPanel>
                      </AccordionItem>
                  ))}
              </Accordion>
          </div>
        </div>
    )
}