import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { title: "makan", isDone: false },
      { title: "ngoding", isDone: false },
      { title: "tidur", isDone: false },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const indexToDelete = action.payload;
      state.todos.splice(indexToDelete, 1);
    },
    updateTodoStatus: (state, action) => {
      const { index, isDone } = action.payload;
      state.todos[index].isDone = isDone;
    },
  },
});

export const { addTodo, deleteTodo, updateTodoStatus } = todosSlice.actions;

export default todosSlice.reducer;
