import React from "react";
import styled from "styled-components";

import TodoItem from "../TodoItem";

const TodoListContainer = styled("div")`
  margin: 4px 0px;
  font-size: 14px;

  > ul {
    margin: 0px;
    padding: 0px;

    > li:not(:last-child) {
      margin-bottom: 6px;
      border-bottom: 1px solid #000;
    }
  }
`;

const TodoList = ({ todoList }) => {
  return (
    <TodoListContainer>
      <ul>
        {todoList?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </TodoListContainer>
  );
};

export default TodoList;
