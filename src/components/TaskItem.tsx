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

type TaskItemProps = {
  todos: {
    id: number;
    text: string;
  }[];
  handleDelete: (id: number) => void;
};

export default function TaskItem({ todos, handleDelete }: TaskItemProps) {
  return (
    <Accordion allowMultiple>
      {todos.map(item => (
        <AccordionItem key={item.id} paddingBottom={3}>
          <h2>
            <AccordionButton _expanded={{ bg: "green.400", color: "white" }}>
              {HeaderBox(item)}
              <AccordionIcon boxSize={7} marginRight={4} />
              <DeleteIcon boxSize={4} onClick={() => handleDelete(item.id)} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{InputTextBody()}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
