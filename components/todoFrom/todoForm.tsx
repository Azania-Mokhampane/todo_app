import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import AddButton from "../UI/addButton";
import ModalCard from "../UI/modal";
import Button from "../UI/button";

interface SaveTodoType {
  onSaveTodo: (arg0: { todo: string; id: string }) => void;
}

const TodoForm = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [task, setTask] = useState("");

  const onCloseHandler = () => {
    setTask("");
    props.onClose();
  };

  //evoked when the form submits
  const submitHandler = (e: { preventDefault: () => void }) => {
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
                onChange={(e) => setTask(e.target.value)}
                type="text"
                required
              />
            </div>
            <div className="flex flex-row pt-5 justify-center gap-8 text-white">
              <Button type="submit">Add Task</Button>

              <Button onClick={onCloseHandler} type="button">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </ModalCard>
      <AddButton showForm={onOpen} />
    </>
  );
};

export default TodoForm;
