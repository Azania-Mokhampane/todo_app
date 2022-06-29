import React, { useState } from "react";
import Delete from "../Buttons/confirmDelete";
import { RiCheckboxCircleFill } from "react-icons/ri";
import EditTodo from "../Buttons/editTodo";
import { TodoListTypes } from "../../utils/types";

const TodoItem = (props: TodoListTypes) => {
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
          <EditTodo value={props.editVal} edit={props.edit} />
          <button
            onClick={Done}
            className="transition ease-in-out  md:hover:scale-150 text-xl md:text-2xl duration-300"
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
