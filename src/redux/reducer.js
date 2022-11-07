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
    // Update Todo
    updateTodo: (state, action) => {
      return state.map((todo) => {
        const item = todo.item;
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            [item]: action.payload.text,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoReducer.actions;
export const reducer = todoReducer.reducer;
