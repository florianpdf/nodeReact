import React, { Component } from 'react';
import './Gift.css';

class Gift extends Component {
  constructor(props){
    super(props); 

    this.click = this.click.bind(this);
  }

  click() {
    this.props.remove(this.props.id);
  }

  render() {
    return (
      <div className="Gift">
        {this.props.name}
        <button className="remove" onClick={this.click}>X</button>
      </div>
    );
  }
}

export default Gift;
