import styled from "styled-components";
import { useDispatch } from "react-redux";
import { todoDone, deleteTodo } from "../../store/todo";


import Button from "../Button";


const TodoItemContainer = styled("li")`
  padding: 4px;
  background-color: ${({ completed }) => (completed ? "green" : "transparent")};

  > p {
    margin: 0px;
  }
`;

const TodoItem = ({ title, completed, id }) => {

  const dispatch = useDispatch();

  console.log(todoDone)
  console.log(deleteTodo)

  
  const handleChange = () => {
    dispatch(todoDone(id));

  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  }


  return (
    <TodoItemContainer completed={completed}>
      
      <p>{title}
      <div>
          <Button onClick={handleChange} type="submit">done</Button>
          <Button onClick={handleDelete} type="submit">delete</Button>
      </div></p>
      
    </TodoItemContainer>
  );
};

export default TodoItem;
