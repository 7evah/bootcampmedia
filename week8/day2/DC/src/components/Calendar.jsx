import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDay } from '../redux/actions';

const Calendar = () => {
  const dispatch = useDispatch();
  const selectedDay = useSelector(state => state.selectedDay);

  const handleChange = (e) => dispatch(setSelectedDay(e.target.value));

  return (
    <div>
      <input type="date" value={selectedDay} onChange={handleChange} />
    </div>
  );
};

export default Calendar;
