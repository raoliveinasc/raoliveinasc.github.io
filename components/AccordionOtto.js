import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';
  
import 'react-accessible-accordion/dist/fancy-example.css';

const accordionItems = [
    {
      uuid: 1,
      heading: 'Section 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      uuid: 2,
      heading: 'Section 2',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      uuid: 3,
      heading: 'Section 3',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];

export default function AccordionOtto() {

    return (
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
    )
}