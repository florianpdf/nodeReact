import React, { Component } from 'react';
import axios from 'axios';
import Gift from './Gift';
import logo from './logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifts: [],
      value: '',
    };
    this.removeGift = this.removeGift.bind(this);
    this.addGift = this.addGift.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.getAllGifts = this.getAllGifts.bind(this);
  }

  componentDidMount() {
    this.getAllGifts();
  }

  getAllGifts() {
    axios
      .get('/gifts')
      .then(response => response.data)
      .then(data => {
        this.setState({
          gifts: data
        });
      });
  }

  removeGift(id) {
    axios
      .delete(`/gifts/${id}`)
      .then(this.getAllGifts)
  };

  addGift = () => {
    axios
      .post('/gifts', { name: this.state.value })
      .then(this.getAllGifts)
      .then(data => {
        this.setState({
          value: '',
        });
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

        <img src="https://wildcodeschool.fr/wp-content/uploads/2018/02/Benoi%CC%82t-Hubert-300x257.png" />

        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.onChangeValue}
          />
          <button
            type="button"
            onClick={this.addGift}
          >
            Ajouter
            </button>
        </form>
        <ul>
          {this.state.gifts.map((item) => (
            <Gift
              remove={this.removeGift}
              id={item.id}
              list={item.name}
            >
            </Gift>
          ))}
        </ul>
        <button type="button" className="mail"> Dear Santa Florian, send me my gifts</button>
      </div>
    );
  }
}

export default App;
