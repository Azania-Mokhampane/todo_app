import React from "react";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";

const ModalCard = (props: any) => {
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
