import React, { useRef, useState } from 'react';

function CharacterCounter() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleInput = () => {
    setCount(inputRef.current.value.length);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Character Counter</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        onInput={handleInput}
        style={{ padding: '10px', fontSize: '16px', width: '300px' }}
      />
      <p>Character Count: {count}</p>
    </div>
  );
}

export default CharacterCounter;
