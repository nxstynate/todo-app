import { useState } from "react";
import { Button, Input } from "@chakra-ui/react";

export default function ClickButton() {
  const [showInput, setShowInput] = useState(false);

  const handleButtonClick = () => {
    setShowInput(!showInput);
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>Show Input</Button>
      {showInput && <Input />}
    </div>
  );
}
