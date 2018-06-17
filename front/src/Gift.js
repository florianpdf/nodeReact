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
      <li className="Gift">
        - {this.props.name}
        <span href="#" className="remove" onClick={this.click}>supprimer</span>
      </li>
    );
  }
}

export default Gift;
