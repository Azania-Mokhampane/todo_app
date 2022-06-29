import React, { useState } from "react";
// import EditTodo from "../Buttons/editTodo";
import { RiCheckboxCircleFill } from "react-icons/ri";
import Delete from "../Buttons/confirmDelete";

const SearchResults = (props: any) => {
  const [complete, setcomplete] = useState(false);

  const Done = () => {
    setcomplete(!complete);
  };

  //   const deleteTodo = () => {
  //     props.delete(props.index);
  //   };

  return (
    <>
      {props.results &&
        props.results.map((item: any) => (
          <div
            key={item.item.id}
            className="flex flex-row justify-between mx-auto bg-pink-300 p-3 pl-4 rounded-lg text-lg m-3 w-11/12"
          >
            <h1 className=" font-semibold ">{item.item.todo}</h1>
            <div className="flex flex-row gap-4 ">
              {/* <EditTodo value={props.editVal} edit={props.edit} /> */}
              <button
                onClick={Done}
                className="transition ease-in-out  md:hover:scale-150 text-xl md:text-2xl duration-300"
              >
                {!complete ? (
                  <RiCheckboxCircleFill />
                ) : (
                  <RiCheckboxCircleFill className="text-green-500" />
                )}
              </button>
              {/* <Delete deleteTodo={deleteTodo} /> */}
            </div>
          </div>
        ))}
    </>
  );
};

export default SearchResults;
