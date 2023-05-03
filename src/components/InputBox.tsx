import { Input } from "@chakra-ui/react";

export default function InputBox(
  text: string,
  setText: (arg0: string) => void,
  handleEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void
) {
  return (
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
  );
}
