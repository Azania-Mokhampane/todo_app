import React from "react";

const TodoItem = (props: any) => {
  return (
    <div key={props.id} className="flex mx-auto bg-pink-300 p-2 m-10 w-4/5">
      <h1>{props.todo}</h1>
    </div>
  );
};

export default TodoItem;
