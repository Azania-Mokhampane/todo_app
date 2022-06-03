import React from "react";
import { MdDeleteSweep } from "react-icons/md";
const TodoItem = (props: any) => {
  return (
    <div
      key={props.id}
      className="flex flex-row justify-between mx-auto bg-pink-300 p-3 pl-4 rounded-lg text-lg m-3 w-11/12"
    >
      <h1 className=" font-semibold ">{props.todo}</h1>
      <button onClick={props.delete}>
        <MdDeleteSweep />
      </button>
    </div>
  );
};

export default TodoItem;
