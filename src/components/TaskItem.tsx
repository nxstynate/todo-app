import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import InputTextBody from "./InputTextBody";
import HeaderBox from "./HeaderBox";

export default function TaskItem(todos: { id: number; text: string }[]) {
  return (
    <Accordion allowMultiple>
      {todos.map(item => (
        <AccordionItem key={item.id} paddingBottom={3}>
          <h2>
            <AccordionButton _expanded={{ bg: "green.400", color: "white" }}>
              {HeaderBox(item)}
              <AccordionIcon boxSize={7} marginRight={4} />
              <DeleteIcon boxSize={4} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{InputTextBody()}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
