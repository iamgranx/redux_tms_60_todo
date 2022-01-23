import React from "react";
import styled from "styled-components";

import TodoList from "../../components/TodoList";
import Header from "../Header";
import TodoForm from "../TodoForm";

import ThemeProvider from "../../providers/ThemeProvider/ThemeProviders";

const Container = styled("div")`
  width: 100%;
  max-width: 600px;
  margin: 8px auto;
`;

const TodoListContainer = () => {
  return (
    <ThemeProvider>
      <Container>
        <Header />
        <TodoForm />
        <TodoList />
      </Container>
    </ThemeProvider>
    
  );
};

export default TodoListContainer;
