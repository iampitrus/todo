import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Adding new todo
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    // Deleting a note
    deleteTodo: (state, action) => {
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { addTodo, deleteTodo } = todoReducer.actions;
export const reducer = todoReducer.reducer;
