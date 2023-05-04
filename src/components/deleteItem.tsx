export function deleteItem(): { id: number; text: string }[] {
  const initialTodos = [];
  for (let i = 0; i < 0; i++) {
    initialTodos.push({
      id: i,
      text: "Item " + (i + 1),
    });
  }
  return initialTodos;
}
