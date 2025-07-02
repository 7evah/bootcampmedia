import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
} from './redux/bookSlice';

const genreMap = {
  All: selectBooks,
  Horror: selectHorrorBooks,
  Fantasy: selectFantasyBooks,
  'Science Fiction': selectScienceFictionBooks,
};

const BookList = () => {
  const [genre, setGenre] = useState('All');
  const books = useSelector(genreMap[genre]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>📚 Book Inventory</h2>
      <select value={genre} onChange={e => setGenre(e.target.value)}>
        <option>All</option>
        <option>Horror</option>
        <option>Fantasy</option>
        <option>Science Fiction</option>
      </select>

      <ul style={{ listStyle: 'none', marginTop: '2rem' }}>
        {books.map(book => (
          <li key={book.id} style={{ marginBottom: '1rem' }}>
            <strong>{book.title}</strong> by {book.author} ({book.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
