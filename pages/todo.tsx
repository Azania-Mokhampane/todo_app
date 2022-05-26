import React, { useState } from "react";
import TodoForm from "../components/todoForm";
import Link from "next/link";
import TodoList from "../components/todoList";
import AddButton from "../components/UI/addButton";

type ITodos = {
  todo: string;
  id: string;
};

type TodoTypes = {
  todo: string;
  id: string;
};

const Todo = () => {
  const [todoData, setTodoData] = useState<TodoTypes[]>([]); //users todo data will be store in the todoData Array
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showForm = () => {
    setIsFormVisible(true);
  };
  const hideForm = () => {
    setIsFormVisible(false);
  };
  const onSaveTodo = (todos: ITodos) => {
    //
    const TodoData = [...todoData];
    TodoData.push(todos);
    // setExpenses(EXPENSES);

    setTodoData(TodoData);
    todoData.reverse();
    console.log(todoData);
  };

  return (
    <>
      <div className="pt-3 text-center font-bold text-2xl">
        <Link href="/">
          <h1>My Todo</h1>
        </Link>
      </div>

      {isFormVisible && (
        <TodoForm hideForm={hideForm} onSaveTodo={onSaveTodo} />
      )}

      {/* {todoData.map((items: ITodos) => (
        <TodoList key={items.id} id={items.id} todo={items.todo} />
      ))} */}
      <TodoList data={todoData} />
      <AddButton showForm={showForm} />
    </>
  );
};

export default Todo;
