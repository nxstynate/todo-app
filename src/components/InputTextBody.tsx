import { Textarea } from "@chakra-ui/react";

export default function InputTextBody() {
  return (
    <Textarea
      variant="filled"
      size="lg"
      focusBorderColor="green.200"
      placeholder="Enter an item..."
    ></Textarea>
  );
}
