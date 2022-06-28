import React, { useState, useEffect } from "react";
import TodoForm from "../components/todoFrom/todoForm";
import Link from "next/link";
import TodoList from "../components/todoFrom/todoList";
import { IoIosArrowBack } from "react-icons/io";
import ColorMode from "../components/UI/colorMode";
import { Button } from "@chakra-ui/react";
import SearchBar from "../components/UI/searchbar";
import { initialState } from "../utils/store";
import { useRecoilState } from "recoil";

type ITodos = {
  todo: string;
  id: string;
};

const Todo = () => {
  const [todoData, setTodoData] = useState<ITodos[]>([]); //users todo data will be store in the todoData Array
  const [editVal, setEditVal] = useState<string | undefined>();
  const [showResults, ___] = useRecoilState(initialState);

  const [toogleSearch, setToggleSearch] = useState<boolean>(true);

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
  const handleDelete = (index: number) => {
    localStorage.removeItem("Todos");
    let newList = todoData;
    newList.splice(index, 1); //removes an element from an array
    setTodoData([...newList]);
  };

  //updating the todo
  const editHandler = (id: string) => {
    // const filteredItem = todoData.filter((item) => item.id !== id);
    const selectedItem = todoData.find((item) => item.id === id);
    setEditVal(selectedItem?.todo);
    // onOpen();
  };

  //managing the todo list if searching
  const searchHandler = () => {
    setToggleSearch(true);
  };

  return (
    <div className="max-w-4xl m-auto">
      <div className=" flex justify-between  mx-2 pt-3 text-center font-bold text-2xl">
        <div className="">
          {/* transition duration-300 ease-in-out bg-gray-700 rounded-md rounde-md cursor-pointer hover:bg-gray-600 hover:rounded-md */}
          <Button w="fit-content" _focus={{ boxShadow: "none" }}>
            <Link href="/">
              <IoIosArrowBack className="text-2xl" />
            </Link>
          </Button>
        </div>
        <div>
          <h1>My Todo</h1>
        </div>
        <div className="">
          <ColorMode />
        </div>
      </div>

      <SearchBar
        showHandler={searchHandler}
        show={toogleSearch}
        data={todoData}
        editVal={editVal}
        edit={editHandler}
      />

      <TodoForm onSaveTodo={onSaveTodo} />
      {!showResults ? (
        tasks === 0 ? null : tasks === 1 ? (
          <p className="text-center py-3 text-lg">
            You have {tasks} task remaining
          </p>
        ) : (
          <p className="text-center py-3">You have {tasks} tasks remaining</p>
        )
      ) : null}

      <TodoList
        editVal={editVal}
        edit={editHandler}
        delete={handleDelete}
        data={todoData}
        id={""}
        todo={""}
        index={0}
      />
    </div>
  );
};

export default Todo;
