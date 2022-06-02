import React from "react";

const TodoItem = (props: any) => {
  return (
    <div
      key={props.id}
      className="flex flex-row justify-between mx-auto bg-pink-300 p-3 pl-4 rounded-lg text-lg m-3 w-11/12"
    >
      <h1 className=" font-semibold ">{props.todo}</h1>
      {/* <button onClick={props.delete}>Del</button> */}
    </div>
  );
};

export default TodoItem;
