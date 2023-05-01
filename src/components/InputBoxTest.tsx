import {
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

  const handleClick = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
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
        width="10rem"
        colorScheme="blue"
        onClick={onToggle}
      >
        ADD ITEM
      </Button>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Input
          variant="filled"
          size="lg"
          focusBorderColor="lime"
          placeholder="Enter an item..."
          value={text}
          onKeyDown={handleClick}
        ></Input>
        <ScaleFade initialScale={0.9} in={isOpen}>
          <UnorderedList>
            {todos.map(item => (
              <ListItem key={item.id}>{item.text}</ListItem>
            ))}
          </UnorderedList>
        </ScaleFade>
      </ScaleFade>
    </>
  );
}
