import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Please enter valid numbers');
      return;
    }

    let res;
    switch (operation) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : 'Cannot divide by zero';
        break;
      default:
        res = 'Invalid operation';
    }

    setResult(res); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>React Calculator</h1>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="number"
          placeholder="First number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="+">➕ Add</option>
          <option value="-">➖ Subtract</option>
          <option value="*">✖ Multiply</option>
          <option value="/">➗ Divide</option>
        </select>
        <input
          type="number"
          placeholder="Second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <button onClick={calculate}>Calculate</button>
      <div style={{ marginTop: '2rem', fontSize: '1.5rem' }}>
        {result !== null && <p>Result: <strong>{result}</strong></p>}
      </div>
    </div>
  );
}

export default App;
