import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { createTodo } from "../../store/todo";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Form = styled("form")`
  margin: 0px;
  padding: 4px;
`;

const TodoForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createTodo(value));
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={value}
        onChange={handleChange}
        label="Новое задание"
        placeholder="Название задания"
        id="task"
      />
      <Button type="submit">Создать</Button>
    </Form>
  );
};

export default TodoForm;
