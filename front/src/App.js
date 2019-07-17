import React, { Component } from 'react';
import Gift from './Gift';
import logo from './logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      gifts: [
      ]
    };

    this.removeGift = this.removeGift.bind(this);
    this.addAGift = this.addAGift.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);

  }

  removeGift(index) {
    let giftList = this.state.gifts;
    let newgiftList = giftList.splice(index, 1);
    this.setState({ giftList: newgiftList })

  };

  addAGift = () => {
    // not allowed AND not working
    this.setState(state => {
      const gifts = state.gifts.push(state.value);

      return {
        ...gifts,
        value: '',
      };
    });
  };

  onChangeValue = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">It's Christmas !</h1>
        </header>

        <img src="https://media.giphy.com/media/JltOMwYmi0VrO/giphy.gif" />

        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.onChangeValue}
          />
          <button
            type="BUTTON"
            onClick={this.addAGift}>
            Ajouter
        </button>

        </form>

        <div className="GiftWrapper">


          {this.state.gifts.map((item, index) =>

            <Gift
              id={index}
              remove={this.removeGift}
              list={this.state.gifts} />

          )}



        </div>

        <button type="button" className="mail"> Dear Santa Florian, send me my gifts</button>

      </div>
    );
  }
}

export default App;
