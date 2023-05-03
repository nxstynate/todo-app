import { Divider } from "@chakra-ui/react";
import "./App.css";
import AppendItem from "./components/AppendItem";
import Title from "./components/Title";

// Add delete functionality

export default function App() {
  return (
    <>
      <Divider marginBottom={6} />
      <Title />
      <Divider marginBottom={6} />
      <AppendItem />
    </>
  );
}
