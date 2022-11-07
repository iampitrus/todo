import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  list: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      const todo = {
        id: Math.random() * 10,
        text: action.payload,
      };
      state.list.push(todo);
      state.count += 1;
    },
    deleteNote: (state, action) => {
      state.count -= 1;
      return (state.list = state.list.filter(
        (todo) => todo.id !== action.payload
      ));
    },
    upDate: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNote, deleteNote, upDate } = todoSlice.actions;

export default todoSlice.reducer;
