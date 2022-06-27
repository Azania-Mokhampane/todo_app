import React from "react";
import styles from "../../styles/Home.module.css";
import TodoItem from "./todoItems";
import { DataType } from "../../utils/types";

interface PropTypes {
  id: string;
  todo: string;
  index: number;
  delete: (index: number) => void;
  edit: (id: string) => void;
  data: DataType[];
  editVal: string | undefined;
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
              editVal={props.editVal}
              id={items.id}
              todo={items.todo}
              delete={props.delete}
              index={index}
              edit={() => props.edit(items.id)}
              data={props.data}
            />
          </>
        ))
      )}
    </>
  );
};

export default TodoList;
