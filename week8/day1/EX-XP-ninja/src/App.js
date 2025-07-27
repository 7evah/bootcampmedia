import { TaskProvider } from './TaskContext'
import AddTask from './AddTask'
import TaskList from './TaskList'

function App() {
  return (
    <TaskProvider>
      <div className="container mt-5">
        <div className="card shadow">
          <div className="card-body">
            <h1 className="card-title mb-4">Task Manager</h1>
            <AddTask />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskProvider>
  )
}

export default App
