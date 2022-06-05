import React, { useState, useEffect } from "react";
import TodoForm from "../components/todoForm";
import Link from "next/link";
import TodoList from "../components/todoList";
import { IoIosArrowBack } from "react-icons/io";
import ColorMode from "../components/UI/colorMode";

type ITodos = {
  todo: string;
  id: string;
};

const Todo = () => {
  const [todoData, setTodoData] = useState<ITodos[]>([]); //users todo data will be store in the todoData Array

  const tasks = todoData.length;

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

  //deleting the todo item
  const handleDelete = (index: any) => {
    localStorage.removeItem("Todos");
    let newList = todoData;
    newList.splice(index, 1);
    setTodoData([...newList]);
  };

  return (
    <>
      <div className=" flex flex-row pt-3 text-center font-bold text-2xl">
        <div className="flex justify-start pl-2 pt-2">
          <Link href="/">
            <IoIosArrowBack />
          </Link>
        </div>
        <div className=" flex items-center justify-center w-screen">
          <h1>My Todo</h1>
        </div>
        <div className="flex justify-start pr-2 pt-1">
          <ColorMode />
        </div>
      </div>

      <TodoForm onSaveTodo={onSaveTodo} />
      {tasks === 0 ? null : tasks === 1 ? (
        <p className="text-center py-3 text-lg">
          You have {tasks} task remaining
        </p>
      ) : (
        <p className="text-center py-3">You have {tasks} tasks remaining</p>
      )}
      <TodoList delete={handleDelete} data={todoData} />
    </>
  );
};

export default Todo;
