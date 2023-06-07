import React from "react";
import TodoBackground from "../todobackground/TodoBackground";
import sunIcon from "../../assets/images/icon-sun.svg";
import TodoInputs from "./TodoInputs";
import TodoLists from "./TodoLists";

const TodoContainer = () => {
  return (
    <div>
      <TodoBackground />
      <div className="container">
        <header className="header">
          <h1>TODO</h1>
          <img src={sunIcon} alt="sun" />
        </header>
        <TodoInputs />
        <TodoLists />
      </div>
    </div>
  );
};

export default TodoContainer;
