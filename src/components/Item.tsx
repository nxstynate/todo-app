import {
  Button,
  Input,
  ScaleFade,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

export default function Item() {
  const { isOpen, onToggle } = useDisclosure();

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
        <Stack direction="row" alignItems="center" spacing={3}></Stack>
        <Input placeholder="Enter task..." size="lg" focusBorderColor="lime" />
      </ScaleFade>
    </>
  );
}
