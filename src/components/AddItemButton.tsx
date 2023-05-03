import { Button } from "@chakra-ui/react";

export default function AddItemButton(onToggle: () => void) {
  return (
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
  );
}
