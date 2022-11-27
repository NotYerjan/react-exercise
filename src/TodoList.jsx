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

  return (
    <>
      <ul>
        {items &&
          items.map((item) => {
            return <li key={item}>{item}</li>;
          })}
      </ul>
      <form onSubmit={formSubmitHandler}>
        <input type="text" ref={todoRef} />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
