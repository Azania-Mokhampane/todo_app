import React, { ReactNode } from "react";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";

interface PropType {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  onOpen: () => void;
}
const ModalCard = (props: PropType) => {
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>{props.children}</ModalContent>
      </Modal>
    </>
  );
};

export default ModalCard;
