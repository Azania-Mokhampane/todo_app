import React, { useState } from "react";

const TodoForm = (props: any) => {
  const [task, setTask] = useState("");

  //function that closes the form when cancelled
  const onCancel = () => {
    props.hideForm();
  };

  //evoked when the form submits
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
      <div className="rounded-xl  p-5 m-auto bg-pink-300 w-11/12 shadow-2xl">
        <form onSubmit={submitHandler}>
          <div className="flex flex-col">
            <label htmlFor="Task">Task</label>
            <input
              className="rounded-md h-10"
              value={task}
              onChange={(e: any) => setTask(e.target.value)}
              type="text"
              required
            />
          </div>
          <div className="flex flex-row pt-5 justify-center gap-8 ">
            <button className="bg-pink-500 rounded-md p-1 w-20" type="submit">
              Add Task
            </button>
            <button
              className="bg-pink-500 rounded-md p-1 w-20"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
