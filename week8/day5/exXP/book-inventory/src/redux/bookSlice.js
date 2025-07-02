import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror' },
    { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { id: 3, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
    { id: 4, title: 'Frankenstein', author: 'Mary Shelley', genre: 'Horror' },
    { id: 5, title: 'The Martian', author: 'Andy Weir', genre: 'Science Fiction' },
    { id: 6, title: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasy' },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
});

// Base selector
export const selectBooks = state => state.books.books;

// Genre-specific selectors
export const selectHorrorBooks = createSelector(
  [selectBooks],
  books => books.filter(book => book.genre === 'Horror')
);

export const selectFantasyBooks = createSelector(
  [selectBooks],
  books => books.filter(book => book.genre === 'Fantasy')
);

export const selectScienceFictionBooks = createSelector(
  [selectBooks],
  books => books.filter(book => book.genre === 'Science Fiction')
);

export default bookSlice.reducer;
