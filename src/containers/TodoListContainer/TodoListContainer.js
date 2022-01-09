import React from "react";
import styled from "styled-components";

import TodoList from "../../components/TodoList";
import TodoForm from "../../components/TodoForm";

const Container = styled("div")`
  width: 100%;
  max-width: 600px;
  margin: 8px auto;
`;

const TodoListContainer = () => {
  return (
    <Container>
      <TodoForm />
      <TodoList />
    </Container>
  );
};

export default TodoListContainer;
