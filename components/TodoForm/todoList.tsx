import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import TodoItem from "./todoItems";
import { TodoListTypes } from "../../utils/types";
import SearchBar from "../SearchBar";
import Fuse from "fuse.js";


const TodoList = (props: TodoListTypes) => {
  const [query, setQuery] = useState<string>("");

  // const { data } = props.data

  const options = {
    includeScore: true,
    keys: ["todo"],
  };

  const fuse = new Fuse(props.data, options);

  const results = fuse.search(query);

  const expenseResults = query
    ? results.map((todo) => {
        todo.item;
      })
    : props.data;

  const check = results.map((exp: any) => exp);

  console.log("Check :", expenseResults);
  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />

      {props.data.length == 0 ? (
        <div className={styles.todolist_container}>
          <img className="" src="/img/Relaxing_Two Color.svg" alt="" />
          <p>Seems like you have nothing to do yet :-(</p>
        </div>
      ) : (
        expenseResults.map((items: any, index: any) => (
          <>
            {/* <TodoItem
              editVal={props.editVal}
              id={items.id}
              todo={items.todo}
              delete={props.delete}
              index={index}
              edit={() => props.edit(items.id)}
              data={props.data}
            /> */}
          </>
        ))
      )}
    </>
  );
};

export default TodoList;
