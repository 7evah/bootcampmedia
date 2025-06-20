import { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Color from './exercises2/Color'
import Ex3 from './exercises3/ex3'

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }

    return (
      <h1 onClick={this.handleClick}>
        {this.state.counter}
      </h1>
    );
  }
}

function App() {
  return (
    <div>
      <h2>Simulation 1</h2>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      <h2>Simulation 2</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      <h2>Simulation 3</h2>
      <BuggyCounter />



      <div>
        <h2>Exercise 2</h2>
        <ErrorBoundary>
          <Color />
        </ErrorBoundary>
      </div>
      
       <div>
        <h2>Exercise 3</h2>
        <ErrorBoundary>
          <Ex3 />
        </ErrorBoundary>
      </div>



     
    </div>
  );
}

export default App;