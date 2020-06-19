import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import Input from "./Input";
import Card from "./Card";

const MainContainer = styled.div`
  width: 95%;
`

const Main = () => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const startInput = () => {
    setShowInput(!showInput);
  };

  type Todo = { id: number; todo: string; done: boolean };
  const [todoList, setTodoList] = useState<Todo[]>([
    { id: 0, todo: "주민등록 등본 발급받기", done: false },
    { id: 1, todo: "졸업예정 증명서 발급받기", done: false },
  ]);
  const onToggle = (event: any) => {
    event.preventDefault();
    let id = event.target.parentNode.dataset.id;
    const copyArray = todoList;
    copyArray[id].done = !todoList[id].done;
    setTodoList([...copyArray]);
  };

  const [todoItem, setTodoItem] = useState<string>("");
  const getTodoItem = (event: any) => {
    setTodoItem(event.target.value);
  };
  const addTodoItem = (event: any) => {
    event.preventDefault();
    const newId = todoList.length;
    const newItem = {id: newId, todo: todoItem, done: false};
    setTodoList(prev => [...prev, newItem]);
    setTodoItem('')
  };
  const removeTodoItem = (event:any) => {
      event.preventDefault();
      const id = parseInt(event.target.parentNode.dataset.id);
      const newList:any = [];
      todoList.forEach(item => {
          if (item.id !== id) {
              newList.push(item)
          }
      });
      setTodoList([...newList]);
  }
  return (
    <MainContainer>
      <Header startInput={startInput} />
      <Input
        showInput={showInput}
        todoItem={todoItem}
        getTodoItem={getTodoItem}
        addTodoItem={addTodoItem}
      />
      {todoList.map((item, index) => (
        <Card
          key={index}
          id={item.id}
          todo={item.todo}
          done={item.done}
          onToggle={onToggle}
          removeTodoItem={removeTodoItem}
        />
      ))}
    </MainContainer>
  );
};

export default Main;
