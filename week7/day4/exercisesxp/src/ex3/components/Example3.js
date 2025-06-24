import React, { Component } from 'react';
import data from '../data/profile.json';

class Example3 extends Component {
  render() {
    return (
      <div>
        <h2>Example3: Experiences</h2>
        {data.Experiences.map((exp) => (
          <div key={exp.id} style={{ marginBottom: '10px' }}>
            <p><strong>Company:</strong> {exp.company}</p>
            <p><strong>Role:</strong> {exp.role}</p>
            <p><strong>Years:</strong> {exp.years}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
