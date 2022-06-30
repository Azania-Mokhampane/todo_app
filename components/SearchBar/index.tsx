import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Fuse from "fuse.js";
import {  SearchBarProps } from "../../utils/types";
import { initialState } from "../../utils/store";
import { useRecoilState } from "recoil";

import SearchResults from "./searchResults";



const SearchBar = (props: SearchBarProps) => {
  const [query, setQuery] = useState<string>("");
  const [___, setShowResults] = useRecoilState(initialState);

  const options = {
    keys: ["todo"],
  };

  const fuse = new Fuse(props.data, options);

  const results = props.data && fuse.search(query);

  if (results.length > 0 || query.length) {
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
      <div className="text-center py-3 font-semibold">
        {results.length ? (
          <p>
            Found {results.length} {results.length === 1 ? "todo" : "todos"} for
            &quot;{query}&quot;{" "}
          </p>
        ) : query.length > 0 && results.length === 0 ? (
          <>
            <p>No results found for &quot;{query}&quot;</p>
            <img
              src="/img/no-results.svg"
              className="flex flex-row justify-center items-center mx-auto h-1/2 w-5/12 py-4"
            />
          </>
        ) : null}
      </div>

      <SearchResults results={results} />
    </>
  );
};

export default SearchBar;
