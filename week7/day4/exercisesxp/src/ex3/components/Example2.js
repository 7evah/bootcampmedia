import React, { Component } from 'react';
import data from '../data/profile.json';

class Example2 extends Component {
  render() {
    const { Programming, SoftSkills } = data.Skills;

    return (
      <div>
        <h2>Example2: Skills</h2>

        <h3>Programming</h3>
        <ul>
          {Programming.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>

        <h3>Soft Skills</h3>
        <ul>
          {SoftSkills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </div>
    );
  }
}

export default Example2;
