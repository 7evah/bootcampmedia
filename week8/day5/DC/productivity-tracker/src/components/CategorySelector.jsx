import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../redux/categorySlice';

const CategorySelector = ({ selected, onChange }) => {
  const categories = useSelector(selectCategories);

  return (
    <select value={selected} onChange={e => onChange(Number(e.target.value))}>
      {categories.map(cat => (
        <option key={cat.id} value={cat.id}>
          {cat.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;
