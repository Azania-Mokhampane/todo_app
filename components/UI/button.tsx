import React from "react";

const Button = (props: any) => {
  return (
    <>
      <button
        className="bg-pink-500 rounded-md p-1 w-20 hover:bg-pink-600  font-semibold"
        type={props.type}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
