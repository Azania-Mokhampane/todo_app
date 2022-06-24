import React from "react";
import styles from "../styles/Home.module.css";
import TodoItem from "./todoItems";

interface PropTypes {
  data: DataType[];
  delete: (index: number) => void;
}
interface DataType {
  id: string;
  todo: string;
}
const TodoList = (props: PropTypes) => {
  return (
    <>
      {props.data.length == 0 ? (
        <div className={styles.todolist_container}>
          <img className="" src="/img/Relaxing_Two Color.svg" alt="" />
          <p>Seems like you have nothing to do yet :-(</p>
        </div>
      ) : (
        props.data.map((items, index) => (
          <>
            <TodoItem
              key={items.id}
              id={items.id}
              todo={items.todo}
              delete={props.delete}
              index={index}
            />
          </>
        ))
      )}
    </>
  );
};

export default TodoList;
