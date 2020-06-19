import React from "react";
import styled from "styled-components";

interface Props {
  showInput: boolean;
  todoItem?: string;
  getTodoItem: (event: any) => void;
  addTodoItem: (event: any) => void;
}

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  form {
      width: 100%;
      display: flex;
      align-items: center;
  }
  input[type=text] {
      width: 60%;
      height: 2rem;
      border: none;
      border-bottom: 1px solid black;
      background-color: transparent;
      font-size: 1rem;
      font-weight: 300;
  }
  input[type=submit] {
      border: none;
      background-color: transparent;
      font-size: 3rem;
      font-weight: 700;
  }
`

const Input: React.FC<Props> = ({
  showInput,
  todoItem,
  getTodoItem,
  addTodoItem,
}) => {
  return showInput ? (
    <InputContainer>
      <form onSubmit={addTodoItem}>
        <input type="text" value={todoItem} onChange={getTodoItem} />
        <input type="submit" value="Enter" />
      </form>
    </InputContainer>
  ) : null;
};

export default Input;
