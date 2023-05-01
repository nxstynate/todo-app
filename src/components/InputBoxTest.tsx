import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Input,
  ListItem,
  ScaleFade,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

function createItem() {
  const initialTodos = [];
  for (let i = 0; i < 0; i++) {
    initialTodos.push({
      id: i,
      text: "Item " + (i + 1),
    });
  }
  return initialTodos;
}

export default function InputBoxTest() {
  const [todos, setTodos] = useState(createItem);
  const [text, setText] = useState("");
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Input value={text} onChange={e => setText(e.target.value)}></Input>
      <Button
        fontSize="1.3rem"
        fontWeight="bold"
        width="10rem"
        colorScheme="blue"
        onClick={() => {
          setText("");
          setTodos([
            {
              id: todos.length,
              text: text,
            },
            ...todos,
          ]);
        }}
      >
        ADD ITEM
      </Button>
      <UnorderedList onClick={onToggle}>
        <ScaleFade initialScale={0.9} in={isOpen}>
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: "orange", color: "white" }}>
                  <Box as="span" flex="1" textAlign="left">
                    {todos.map(item => (
                      <ListItem key={item.id}>{item.text}</ListItem>
                    ))}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </ScaleFade>
      </UnorderedList>
    </>
  );
}
