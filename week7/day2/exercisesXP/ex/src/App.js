import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Car from './Components/Car.js';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

const carinfo = {name: "Ford", model: "Mustang"};

  
function App() {
  //daily challenge-----------------------------
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const addVote = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].votes += 1;
    setLanguages(updatedLanguages);
  };
  // daily challenge-------------^^^^^^

  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome to the Car Showroom</h1>
       <Car carinfo={carinfo}/>
       <Events/>
       <Phone/>
       <Color/>
      </header>
      {/* daily challenge */}
          <div style={{ padding: '20px' }}>
      <h1>Vote for your favorite language</h1>
      {languages.map((lang, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <button onClick={() => addVote(index)}>
            {lang.name}
          </button>
          <span style={{ marginLeft: '10px' }}>
            Votes: {lang.votes}
          </span>
        </div>
      ))}
    </div>
    {/* daily challenge */}
    </div>
    
  );
}

export default App;
