import React, { Component } from 'react';
import Gift from './Gift';
import logo from './logo.png';
import './App.css';
import GiftService from './GiftService';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifts: [],
      giftName: ''
    };

    this.removeGift = this.removeGift.bind(this);
    this.updateField = this.updateField.bind(this);
    this.add = this.add.bind(this);
    this.load();
  }

  async load() {
    const gifts = await GiftService.get();
    this.setState({ gifts });
  }

  async removeGift(id) {
    await GiftService.delete(id);
    this.load();
  }

  updateField(evt) {
    this.setState({ giftName: evt.target.value });
  }

  async add(evt) {
    evt.preventDefault();
    await GiftService.add(this.state.giftName);
    this.load();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">It's Christmas !</h1>
        </header>

        <img src="https://media.giphy.com/media/JltOMwYmi0VrO/giphy.gif" />

        <form onSubmit={this.add}>
          <input type="text" onChange={this.updateField.bind(this)}/>
          <button type="submit"> Ajouter </button>
        </form>

        <div className="GiftWrapper">
          {this.state.gifts.map(gift =>
              <Gift key={gift.id} id={gift.id} name={gift.name} remove={this.removeGift} />
          )}
        </div>

        <button type="button" className="mail"> Dear Santa Florian, send me my gifts</button>

      </div>
    );
  }
}

export default App;
