import React from "react";
import { Button } from "@chakra-ui/react";

const ItemList = () => {
  return (
    <div>
      <IconButton
        colorScheme="blue"
        area-label="Search database"
        icon={<AddIcon />}
      ></IconButton>
    </div>
  );
};

export default ItemList;
