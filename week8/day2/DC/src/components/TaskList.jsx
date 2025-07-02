import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';

const TaskList = ({ onEdit }) => {
  const dispatch = useDispatch();
  const { tasksByDay, selectedDay } = useSelector(state => state);
  const tasks = tasksByDay[selectedDay] || [];

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.title}
          <button onClick={() => onEdit(task)}>✏</button>
          <button onClick={() => dispatch(deleteTask(selectedDay, task.id))}>🗑</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
