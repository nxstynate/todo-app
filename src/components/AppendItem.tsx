import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Input,
  Checkbox,
  ScaleFade,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useState } from "react";

function createItem(): { id: number; text: string }[] {
  const initialTodos = [];
  for (let i = 0; i < 0; i++) {
    initialTodos.push({
      id: i,
      text: "Item " + (i + 1),
    });
  }
  return initialTodos;
}

// function deleteItem(): { id: number; text: string }[] {
//   const removeTodos = null;
//   return removeTodos;
// }

export default function AppendItem() {
  const [todos, setTodos] = useState(createItem);
  const [text, setText] = useState("");
  const { isOpen, onToggle } = useDisclosure();
  // const [remove, setRemove] = useState(deleteItem);

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setTodos([
        {
          id: todos.length,
          text: text,
        },
        ...todos,
      ]);
      setText("");
    }
  };

  return (
    <>
      <Button
        fontSize="1.3rem"
        fontWeight="bold"
        colorScheme="green"
        variant="outline"
        width="10rem"
        onClick={onToggle}
      >
        ADD ITEM
      </Button>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Input
          variant="filled"
          size="lg"
          focusBorderColor="green.400"
          placeholder="Enter an item..."
          marginBottom={8}
          value={text}
          onChange={event => setText(event.target.value)}
          onKeyDown={handleEnter}
        ></Input>
      </ScaleFade>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Accordion allowMultiple>
          {todos.map(item => (
            <AccordionItem key={item.id} paddingBottom={3}>
              <h2>
                <AccordionButton
                  _expanded={{ bg: "green.400", color: "white" }}
                >
                  <Box as="span" flex="2" textAlign="left">
                    <Stack>
                      <Checkbox size="lg" colorScheme="red">
                        {item.text}
                      </Checkbox>
                    </Stack>
                  </Box>
                  <AccordionIcon boxSize={7} marginRight={4} />
                  <DeleteIcon boxSize={4} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Textarea
                  variant="filled"
                  size="lg"
                  focusBorderColor="green.200"
                  placeholder="Enter an item..."
                ></Textarea>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </ScaleFade>
    </>
  );
}
