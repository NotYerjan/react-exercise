import TodoList from "./TodoList";
function App() {
  const renderTodoList = (items, callback) => {
    return (
      <ul>
        {items &&
          items.map((item) => (
            <li key={item}>
              {item} <button onClick={() => callback(item)}>Remove</button>
            </li>
          ))}
      </ul>
    );
  };

  return (
    <>
      <TodoList render={renderTodoList} />
    </>
  );
}

export default App;
