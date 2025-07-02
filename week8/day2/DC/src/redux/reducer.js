import { ADD_TASK, EDIT_TASK, DELETE_TASK, SET_SELECTED_DAY } from './actions';

const initialState = {
  tasksByDay: {},
  selectedDay: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
};

export const taskReducer = (state = initialState, action) => {
  const { day, task, taskId, updatedTask } = action.payload || {};
  const currentTasks = state.tasksByDay[day] || [];

  switch (action.type) {
    case SET_SELECTED_DAY:
      return { ...state, selectedDay: action.payload };

    case ADD_TASK:
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: [...currentTasks, { id: Date.now(), ...task }],
        },
      };

    case EDIT_TASK:
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: currentTasks.map(t => (t.id === taskId ? { ...t, ...updatedTask } : t)),
        },
      };

    case DELETE_TASK:
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: currentTasks.filter(t => t.id !== taskId),
        },
      };

    default:
      return state;
  }
};
