import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import GiftsManager from './GiftsManager';

class App extends Component {

  componentDidMount() {
    let link = document.createElement('link');
    link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Cedarville+Cursive|Roboto');
    link.setAttribute('rel', 'stylesheet');
    
    document.head.appendChild(link);
  }
  
  
  render() {
    return (
      <div className="App">
        <Header />

        <div>
          <img alt="img" src="https://media.giphy.com/media/JltOMwYmi0VrO/giphy.gif" />

          <GiftsManager />

        </div>


      </div>
    );
  }
}

export default App;
