import React, { Component } from 'react';
import data from '../data/profile.json';

class Example1 extends Component {
  render() {
    return (
      <div>
        <h2>Example1: Social Medias</h2>
        <ul>
          {data.SocialMedias.map((platform, index) => (
            <li key={index}>{platform}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
