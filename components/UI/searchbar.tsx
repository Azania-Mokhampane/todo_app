import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Fuse from "fuse.js";
import { DataType } from "../../utils/types";
import { initialState } from "../../utils/store";
import { useRecoilState } from "recoil";
import EditTodo from "../actions/editTodo";
import { RiCheckboxCircleFill } from "react-icons/ri";
import Delete from "../actions/confirmDelete";

type Props = {
  data: DataType[];
  show: boolean;
  showHandler: () => void;
};

const SearchBar = (props: any) => {
  const [query, setQuery] = useState<string>("");
  const [showResults, setShowResults] = useRecoilState(initialState);
  const [complete, setcomplete] = useState(false);
  const deleteTodo = () => {
    props.delete(props.index);
  };
  const Done = () => {
    setcomplete(!complete);
  };

  const options = {
    keys: ["todo"],
  };

  const fuse = new Fuse(props.data, options);

  const results = props.data && fuse.search(query);

  if (results.length > 0) {
    setShowResults(true);
  }
  if (query.trim().length === 0) {
    setShowResults(false);
  }

  return (
    <>
      {props.data && props.data.length === 0 ? null : (
        <div className="flex flex-row w-full items-center justify-center py-3">
          <div className="flex flex-row ring-2 gap-2 rounded-md p-1 w-8/12 md:w-2/5 lg:">
            <div className="flex items-center">
              <span>
                <BiSearchAlt />
              </span>
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="focus:outline-0 flex flex-row w-full bg-inherit"
              placeholder="Search Todo..."
            />
          </div>
        </div>
      )}

      {results &&
        results.map((item: any) => (
          <div
            key={item.item.id}
            className="flex flex-row justify-between mx-auto bg-pink-300 p-3 pl-4 rounded-lg text-lg m-3 w-11/12"
          >
            <h1 className=" font-semibold ">{item.item.todo}</h1>
            <div className="flex flex-row gap-4 ">
              <EditTodo value={props.editVal} edit={props.edit} />
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

export default SearchBar;
