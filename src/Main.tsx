import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import Card from "./Card";

const Main = () => {
  type Todo = { id: number; todo: string; done: boolean };
  const [todoList, setTodoList] = useState<Todo[]>([
    { id: 1, todo: "주민등록 등본 발급받기", done: false },
    { id: 2, todo: "졸업예정 증명서 발급받기", done: false },
  ]);
  const onToggle = (event: any) => {
    event.preventDefault();
    let id = event.target.dataset.id-1;
    const copyArray = todoList;
    copyArray[id].done = !todoList[id].done;
    setTodoList([...copyArray]);
  };
  return (
    <div>
      <Header />
      {todoList.map((item, index) => (
        <Card
          key={index}
          id={item.id}
          todo={item.todo}
          done={item.done}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Main;
