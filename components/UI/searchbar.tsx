import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Fuse from "fuse.js";
import { DataType } from "../../utils/types";

type Props = {
  data: DataType[];
};

const SearchBar = (props: Props) => {
  const [query, setQuery] = useState<string>("");

  const options = {
    keys: ["todo"],
  };

  const fuse = new Fuse(props.data, options);

  const results = props.data && fuse.search(query);

  //   console.log("Results :", results);
  //   console.log("Data :", props.data);
  return (
    <>
      <div className="flex flex-row w-full items-center justify-center py-3">
        <div className="flex flex-row ring-1 gap-1 rounded-md p-1 w-8/12 md:w-2/5 lg:">
          <div className="flex items-center">
            <span>
              <BiSearchAlt />
            </span>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="focus:outline-0"
            placeholder="Search Todo.."
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
