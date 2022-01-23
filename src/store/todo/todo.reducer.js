import { CREATE_TODO, TODO_DONE, DELETE_TODO } from "./todo.actions";

export const initialState = {
  todoList: [],
  deletedTodo: [],
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
      case TODO_DONE: 
      return {
        ...state, todoList: state.todoList.map((todo)=>
        todo.id === action.payload ? {...todo, complete: true} : todo)
      };
      case DELETE_TODO:
        const deletedTodoIndex = state.todoList.findIndex((todo) => todo.id === action.payload);
        if(deletedTodoIndex < 0) {
          return state
        }
        const deletedTodo = state.todoList.splice(deletedTodoIndex, 1);
        return { ...state, 
                deletedTodo: state.deletedTodo.concat(deletedTodo),
              todoList: state.todoList.slice()};
              
        
        

    default:
      return state;
  }
};
