import React, { useState, useEffect } from "react";
import TodoForm from "../components/todoForm";
import Link from "next/link";
import TodoList from "../components/todoList";

type ITodos = {
  todo: string;
  id: string;
};

const Todo = () => {
  const [todoData, setTodoData] = useState<ITodos[]>([]); //users todo data will be store in the todoData Array

  //getting the todo list
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("Todos")!);
    if (todos) {
      setTodoData(todos);
    }
  }, []);

  //saving the todo list
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todoData));
  }, [todoData]);

  const onSaveTodo = (todos: ITodos) => {
    const TodoData = [...todoData];
    TodoData.push(todos);
    setTodoData(TodoData);
  };

  const handleDelete = (todo: any) => {
    const UpdatedList = todoData.filter(
      (todoItem) => todoData.indexOf(todoItem) != todoData.indexOf(todo)
    );
    setTodoData(UpdatedList);
    console.log(UpdatedList);
  };

  return (
    <>
      <div className="pt-3 text-center font-bold text-2xl">
        <Link href="/">
          <h1>My Todo</h1>
        </Link>
      </div>

      <TodoForm onSaveTodo={onSaveTodo} />

      <TodoList delete={handleDelete} data={todoData} />
    </>
  );
};

export default Todo;
