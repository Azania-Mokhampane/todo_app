import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import AddButton from "./UI/addButton";
import ModalCard from "./UI/modal";

const TodoForm = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [task, setTask] = useState("");

  //function that closes the form when cancelled
  // const onCancel = () => {
  //   props.hideForm();
  // };

  const onCloseHandler = () => {
    setTask("");
    onClose();
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
    onClose();
    props.onSaveTodo(todos); // we are passing data to parent component as an argument from the child component
  };
  return (
    <>
      <ModalCard isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <div className="rounded-xl  p-5 bg-pink-300  shadow-2xl">
          <form onSubmit={submitHandler}>
            <div className="flex flex-col">
              <label
                className="text-white font-semibold text-xl"
                htmlFor="Task"
              >
                Task
              </label>
              <input
                className="rounded-md text-lg p-2"
                value={task}
                onChange={(e: any) => setTask(e.target.value)}
                type="text"
                required
              />
            </div>
            <div className="flex flex-row pt-5 justify-center gap-8 text-white">
              <button
                className="bg-pink-500 rounded-md p-1 w-20 hover:bg-pink-600  font-semibold"
                type="submit"
              >
                Add Task
              </button>
              <button
                className="bg-pink-500 rounded-md p-1 w-20 hover:bg-pink-600 font-semibold"
                onClick={onCloseHandler}
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </ModalCard>
      <AddButton showForm={onOpen} />
    </>
  );
};

export default TodoForm;
