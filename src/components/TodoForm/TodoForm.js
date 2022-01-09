import React from "react";
import styled from "styled-components";

import Button from "../Button";
import Input from "../Input";

const Form = styled("form")`
  margin: 0px;
  padding: 4px;
`;

const TodoForm = () => {
  return (
    <Form>
      <Input label="Новое задание" placeholder="Название задания" id="task" />
      <Button>Создать</Button>
    </Form>
  );
};

export default TodoForm;
