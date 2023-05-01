import "./App.css";
import TodoList from "./components/InputBoxT";
import InputBoxTest from "./components/InputBoxTest";
import Item from "./components/Item";
import ListItem from "./components/ListItem";
import Title from "./components/Title";

export default function App() {
  return (
    <>
      <Title />
      <InputBoxTest />
      {/* <ListItem /> */}
      <TodoList />
    </>
  );
}
