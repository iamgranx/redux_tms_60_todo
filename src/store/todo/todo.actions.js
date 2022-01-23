export const CREATE_TODO = "CREATE_TODO";
export const TODO_DONE = "TODO_DONE";
export const DELETE_TODO = "DELETE_TODO"


export const createTodo = (title) => ({
  type: CREATE_TODO,
  payload: title,
});

export const todoDone = (id) => ({
   type: TODO_DONE,
   payload: id,
 });

 export const deleteTodo = (id) => ({
   type: DELETE_TODO,
   payload: id,
 })