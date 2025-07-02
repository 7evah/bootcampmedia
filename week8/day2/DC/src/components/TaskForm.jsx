import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../redux/actions';

const TaskForm = ({ editingTask, onClear }) => {
  const dispatch = useDispatch();
  const selectedDay = useSelector(state => state.selectedDay);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(editingTask ? editingTask.title : '');
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingTask) {
      dispatch(editTask(selectedDay, editingTask.id, { title }));
    } else {
      dispatch(addTask(selectedDay, { title }));
    }

    setTitle('');
    onClear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter task..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit">{editingTask ? 'Update' : 'Add'}</button>
      {editingTask && <button onClick={onClear}>Cancel</button>}
    </form>
  );
};

export default TaskForm;
