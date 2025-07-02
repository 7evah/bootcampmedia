import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'Write report', categoryId: 1, completed: false },
  { id: 2, title: 'Daily standup', categoryId: 2, completed: true },
];

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const task = state.find(t => t.id === action.payload.id);
      if (task) Object.assign(task, action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;

// ✅ Selectors
export const selectTasks = state => state.tasks;

export const selectTasksByCategory = categoryId =>
  createSelector([selectTasks], tasks =>
    tasks.filter(task => task.categoryId === categoryId)
  );

export const selectCompletedTasks = createSelector([selectTasks], tasks =>
  tasks.filter(task => task.completed)
);
