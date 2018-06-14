import React, { Component } from 'react';
import './Gift.css';

class Gift extends Component {
  constructor(props){
    super(props); 
  }

  render() {
    return (
      <div className="Gift">
        UN SUPER CADEAU
        <button className="remove">X</button>
      </div>
    );
  }
}

export default Gift;
