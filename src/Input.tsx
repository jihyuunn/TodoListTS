import React from "react";
import styled from "styled-components";

interface Props {
  showInput: boolean;
  todoItem?: string;
  getTodoItem: (event: any) => void;
  addTodoItem: (event: any) => void;
}

const Input: React.FC<Props> = ({
  showInput,
  todoItem,
  getTodoItem,
  addTodoItem,
}) => {
  return showInput ? (
    <div>
      <form onSubmit={addTodoItem}>
        <input type="text" value={todoItem} onChange={getTodoItem} />
        <input type="submit" value="go!" />
      </form>
    </div>
  ) : null;
};

export default Input;
