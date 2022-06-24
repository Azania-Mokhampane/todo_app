import React, { useState } from "react";
import Delete from "./confirmDelete";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

interface TodoItemTypes {
  id: string;
  todo: string;
  index: number;
  delete: (index: number) => void;
}

const TodoItem = (props: TodoItemTypes) => {
  const [complete, setcomplete] = useState(false);
  const deleteTodo = () => {
    props.delete(props.index);
  };

  const Done = () => {
    setcomplete(!complete);
  };

  return (
    <>
      <div
        key={props.id}
        className="flex flex-row justify-between mx-auto bg-pink-300 p-3 pl-4 rounded-lg text-lg m-3 w-11/12"
      >
        <h1 className=" font-semibold ">{props.todo}</h1>
        <div className="flex flex-row gap-4 ">
          <button className="transition ease-in-out  hover:scale-150 text-xl md:text-2xl duration-300">
            <FiEdit />
          </button>
          <button
            onClick={Done}
            className="transition ease-in-out  hover:scale-150 text-xl md:text-2xl duration-300"
          >
            {!complete ? (
              <RiCheckboxCircleFill />
            ) : (
              <RiCheckboxCircleFill className="text-green-500" />
            )}
          </button>
          <Delete deleteTodo={deleteTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoItem;
