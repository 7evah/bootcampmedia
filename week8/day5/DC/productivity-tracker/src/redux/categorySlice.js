import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Work' },
  { id: 2, name: 'Meetings' },
];

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    editCategory: (state, action) => {
      const cat = state.find(c => c.id === action.payload.id);
      if (cat) Object.assign(cat, action.payload);
    },
    deleteCategory: (state, action) => {
      return state.filter(c => c.id !== action.payload);
    },
  },
});

export const { addCategory, editCategory, deleteCategory } = categorySlice.actions;
export default categorySlice.reducer;

// ✅ Selectors
export const selectCategories = state => state.categories;

export const selectCategoryById = id =>
  createSelector([selectCategories], categories =>
    categories.find(cat => cat.id === id)
  );
