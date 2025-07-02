import React, { useState } from 'react';
import CategorySelector from './components/CategorySelector';
import TaskList from './components/TaskList';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  return (
    <div>
      <h2>🗂 Productivity Tracker</h2>
      <CategorySelector selected={selectedCategory} onChange={setSelectedCategory} />
      <TaskList categoryId={selectedCategory} />
    </div>
  );
};

export default App;
