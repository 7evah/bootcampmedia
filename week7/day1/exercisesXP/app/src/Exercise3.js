import {Component} from "react";
import './Exercise.css';
import logo from './logo.svg';

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

class Exercise extends Component{
    render(){
        return(
       <div>
        <h1 style={style_header}>This is a styled header</h1>

        <p className="para">This is a styled paragraph using CSS class.</p>

        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Visit React Website</a>

        <form>
          <label>
            Name:
            <input type="text" placeholder="Enter your name" />
          </label>
          <button type="submit">Submit</button>
        </form>
        <p>thi is a photo</p>
        <img
          src={logo}
          alt="React Logo"
          style={{ width: '700px' }} 
        />
        <p>thi is a list</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;