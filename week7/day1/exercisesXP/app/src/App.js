import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise3';

 const myelement = <h1>I Love JSX!</h1>;
 const sum = 5 + 5
 const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <div className="App">
      {myelement}
      <p> react is {sum} times better with jsx </p>
      <p>firstname is {user.firstName}</p>
      <p>lastName is {user.lastName}</p>
      <UserFavoriteAnimals  favAnimals = {user.favAnimals}/>
      <Exercise/>
    </div>
  );
}

export default App;
