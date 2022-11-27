import React, { useRef, useState } from "react";

export default function TodoList() {
  const [items, setItems] = useState([
    "Do homework",
    "Do dishes",
    "Go to shop",
  ]);
  const todoRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = todoRef.current.value;
    setItems((prevItems) => [...prevItems, newTodo]);
    todoRef.current.value = "";
  };

  const resetHandler = () => {
    setItems([]);
    todoRef.current.value = "";
  };

  const removeFromTodoHandler = (item) => {
    setItems((prevItems) => {
      return prevItems.filter((todo) => todo !== item);
    });
  };

  return (
    <>
      <ul>
        {items &&
          items.map((item) => (
            <li key={item}>
              {item}{" "}
              <button onClick={() => removeFromTodoHandler(item)}>
                Remove
              </button>
            </li>
          ))}
      </ul>
      <form onSubmit={formSubmitHandler}>
        <input type="text" ref={todoRef} />
        <button type="submit">Add</button>
      </form>
      <button onClick={resetHandler}>Reset</button>
    </>
  );
}
