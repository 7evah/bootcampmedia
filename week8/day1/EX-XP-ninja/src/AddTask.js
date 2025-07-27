import { useState } from 'react'
import { useTasks } from './TaskContext'

export default function AddTask() {
  const [text, setText] = useState('')
  const { dispatch } = useTasks()

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TASK', payload: text })
      setText('')
    }
  }

  return (
    <div className="mb-3">
      <div className="input-group">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          className="form-control"
          placeholder="Enter a task"
        />
        <button onClick={handleAdd} className="btn btn-primary">
          Add
        </button>
      </div>
    </div>
  )
}
