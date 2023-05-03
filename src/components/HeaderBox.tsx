import { Box, Checkbox, Stack } from "@chakra-ui/react";

export default function HeaderBox(item: { id: number; text: string }) {
  return (
    <Box as="span" flex="2" textAlign="left">
      <Stack>
        <Checkbox size="lg" colorScheme="red">
          {item.text}
        </Checkbox>
      </Stack>
    </Box>
  );
}
