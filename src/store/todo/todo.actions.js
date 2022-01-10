export const CREATE_TODO = "CREATE_TODO";

export const createTodo = (title) => ({
  type: CREATE_TODO,
  payload: title,
});
