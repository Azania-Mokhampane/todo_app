import React from "react";
import ModalCard from "./UI/modal";
import { useDisclosure } from "@chakra-ui/react";
import { MdDeleteSweep } from "react-icons/md";
import Button from "./UI/button";

const Delete = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ModalCard isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <div className="flex flex-col p-5 justify-center items-center">
          <h1 className="text-xl font-semibold">Confirm Delete</h1>
          <img
            className="p-5 w-3/5"
            src="/img/confirmDelete.svg"
            alt="A person throwing trash in a bin"
          />
          <div className="flex flex-row justify-center gap-20 pt-5">
            <Button onClick={props.deleteTodo}>Confirm</Button>
            <Button onClick={onClose}>Cancel</Button>
          </div>
        </div>
      </ModalCard>
      <button onClick={onOpen}>
        <MdDeleteSweep />
      </button>
    </>
  );
};

export default Delete;
