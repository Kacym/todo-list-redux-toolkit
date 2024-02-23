import { createSlice } from "@reduxjs/toolkit";

const todoReducer = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    toggleTodo: (state, action) => {
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    },
    deleteTodo: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoReducer.actions;
export default todoReducer.reducer;
