import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

const PlusIcon = () => {
  return (
    <>
      <IconButton
        colorScheme="blue"
        aria-label="Search database"
        icon={<AddIcon />}
      ></IconButton>
    </>
  );
};

export default PlusIcon;
