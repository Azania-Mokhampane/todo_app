import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import ModalCard from "../UI/modal";
import Button from "./button";
import { FiEdit } from "react-icons/fi";


interface PropTypes {
  value: string | undefined;
  edit: () => void;
}
const EditTodo = (props: PropTypes) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [updatedValue, setUpdatedValue] = useState(props.value);

  const mockFn = () => {
    console.log("Todo :", props.value);
    onOpen();
    props.edit();
  };
  return (
    <>
      <ModalCard isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <div className="flex flex-col p-5 justify-center items-center">
          <h1 className="text-xl font-semibold">Edit Todo</h1>
          <input
            type="text"
            value={updatedValue}
            onChange={(e) => setUpdatedValue(e.target.value)}
          />
          <div className="flex flex-row justify-center gap-20 pt-5">
            <Button onClick={() => console.log("UPDATED")}>Update</Button>
            <Button onClick={onClose}>Cancel</Button>
          </div>
        </div>
      </ModalCard>
      <button
        onClick={mockFn}
        className="transition ease-in-out  md:hover:scale-150 text-xl md:text-2xl duration-300"
      >
        <FiEdit />
      </button>
    </>
  );
};

export default EditTodo;
