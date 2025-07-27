import { useTasks } from './TaskContext'

export default function TaskList() {
  const { tasks, dispatch } = useTasks()

  return (
    <ul className="list-group">
      {tasks.map(task => (
        <li
          key={task.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span
            onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            {task.text}
          </span>
          <button
            onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}
            className="btn btn-sm btn-danger"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  )
}
