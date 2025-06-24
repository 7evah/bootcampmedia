import React, { useState, useEffect } from 'react';
import quotes from './quotes';
import './App.css'; 

function App() {
  const [quote, setQuote] = useState({});
  const [bgColor, setBgColor] = useState('#ffffff');

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote.quote === quote.quote);

    const newColor = getRandomColor();
    setQuote(newQuote);
    setBgColor(newColor);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const styles = {
    backgroundColor: bgColor,
    color: bgColor,
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.5s ease',
  };

  return (
    <div style={styles}>
      <div
        style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '10px',
          maxWidth: '600px',
          width: '90%',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: bgColor }}>{quote.quote}</h2>
        <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
          — {quote.author || 'Unknown'}
        </p>
        <button
          onClick={generateQuote}
          style={{
            marginTop: '2rem',
            padding: '0.5rem 1.5rem',
            backgroundColor: bgColor,
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background 0.3s ease',
          }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
