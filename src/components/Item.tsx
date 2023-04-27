import {
  Button,
  Input,
  Radio,
  RadioGroup,
  ScaleFade,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Item() {
  const { isOpen, onToggle } = useDisclosure();
  const [value, setValue] = useState("1");

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
        <Stack direction="row" alignItems="center" spacing={3}>
          <RadioGroup onChange={setValue} value={value}>
            <Radio value="0"></Radio>
          </RadioGroup>
        </Stack>
        <Input placeholder="Enter task..." size="lg" focusBorderColor="lime" />
      </ScaleFade>
    </>
  );
}
