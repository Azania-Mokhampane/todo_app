import React from "react";
import styles from "../styles/Home.module.css";
import TodoItem from "./todoItems";

type ITODOS = {
  todo: string;
  id: string;
};

const TodoList = (props: any) => {
  return (
    <>
      {props.data.length == 0 ? (
        <div className={styles.todolist_container}>
          <img className="" src="/img/Relaxing_Two Color.svg" alt="" />
          <p>Seems like you have nothing to do yet :-(</p>
        </div>
      ) : (
        props.data.map((items: any, index: any) => (
          <TodoItem
            key={items.id}
            id={items.id}
            todo={items.todo}
            delete={props.delete}
            index={index}
          />
        ))
      )}
    </>
  );
};

export default TodoList;
