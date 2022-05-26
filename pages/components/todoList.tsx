import React from "react";

type ITODOS = {
  id: string;
  todo: string;
};

const TodoList = ({ todo, id }: ITODOS) => {
  return (
    <div key={id}>
      <h1>{todo}</h1>
    </div>
  );
};

export default TodoList;
