import React from "react";
import ModalCard from "./UI/modal";
import { useDisclosure } from "@chakra-ui/react";
import { MdDeleteSweep } from "react-icons/md";

const Delete = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ModalCard isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <h1>Confirm Delete</h1>
        <button onClick={props.deleteTodo}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </ModalCard>
      <button onClick={onOpen}>
        <MdDeleteSweep />
      </button>
    </>
  );
};

export default Delete;
