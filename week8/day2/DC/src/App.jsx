import React, { useState } from 'react';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>📅 Daily Planner</h1>
      <Calendar />
      <TaskForm editingTask={editingTask} onClear={() => setEditingTask(null)} />
      <TaskList onEdit={setEditingTask} />
    </div>
  );
}

export default App;
