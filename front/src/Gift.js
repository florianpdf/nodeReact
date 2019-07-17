import React, { Component } from 'react';
import './Gift.css';

class Gift extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list, id, remove } = this.props;
    return (
      <div className="Gift">
        {list[id]}
        <button
          onClick={() => remove(id)}
          className="remove"
        >
          X
          </button>
      </div>
    );
  }
}

export default Gift;
