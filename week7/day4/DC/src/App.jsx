import React, { Component } from 'react';

class App extends Component {
  state = {
    message: '',
    postMessage: '',
    inputValue: ''
  };

  async componentDidMount() {
    const res = await fetch('http://localhost:5000/api/hello');
    const data = await res.json();
    this.setState({ message: data.message });
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/world', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: this.state.inputValue })
    });
    const data = await response.json();
    this.setState({ postMessage: data.message, inputValue: '' });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Type something"
            required
          />
          <button type="submit">Submit</button>
        </form>

        {this.state.postMessage && (
          <p style={{ marginTop: '1rem' }}>{this.state.postMessage}</p>
        )}
      </div>
    );
  }
}

export default App;
