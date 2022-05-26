import React from "react";
import classes from "../../../styles/Home.module.css";
import { IoIosAdd } from "react-icons/io";

const AddButton = ({ showForm }: any) => {
  return (
    <>
      <div className={classes.btn_container}>
        <button onClick={showForm}>
          <IoIosAdd />
        </button>
      </div>
    </>
  );
};

export default AddButton;
