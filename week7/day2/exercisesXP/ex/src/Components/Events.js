import React,{ useState } from 'react';

const Events = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert('I was clicked');
  };

 

const handleKeyDown = (event) => {
if (event.key === 'Enter') {
  alert(`You typed : ${event.target.value}`)
}
};
 const toggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={clickMe}>Click Me</button>
      <br></br>
      <input
      type='text'
      placeholder='type somthing here'
      onKeyDown={handleKeyDown}
      />
      <br></br>
      <button onClick={toggle}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default Events;
