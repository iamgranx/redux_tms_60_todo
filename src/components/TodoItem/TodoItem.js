import React from "react";
import styled from "styled-components";

const TodoItemContainer = styled("li")`
  padding: 4px;
  background-color: ${({ completed }) => (completed ? "green" : "transparent")};

  > p {
    margin: 0px;
  }
`;

const TodoItem = ({ title, completed }) => {
  return (
    <TodoItemContainer completed={completed}>
      <p>{title}</p>
    </TodoItemContainer>
  );
};

export default TodoItem;
