import { CREATE_TODO } from "./todo.actions";

export const initialState = {
  todoList: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todoList: state.todoList.concat({
          id: Math.random(),
          title: action.payload,
          completed: false,
        }),
      };
    default:
      return state;
  }
};
