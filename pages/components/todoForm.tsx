import React, { useState } from "react";

const TodoForm = (props: any) => {
  const [task, setTask] = useState("");
  const submitHandler = (e: any) => {
    e.preventDefault();

    //todo data
    const todos = {
      todo: task,
      id: Math.random().toString(),
    };

    setTask("");
    props.onSaveTodo(todos); // we are passing data to parent component as an argument from the child component
    props.hideForm();
  };
  return (
    <>
      <div className="rounded-xl p-5 m-auto bg-gray-500 w-11/12">
        <form onSubmit={submitHandler}>
          <div className="flex flex-col">
            <label htmlFor="Task">Task</label>
            <input
              value={task}
              onChange={(e: any) => setTask(e.target.value)}
              type="text"
              // placeholder="name"
              required
            />
          </div>
          <div>
            <button type="submit">Add Task</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
