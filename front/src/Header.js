import React from 'react';
import logo from './logo.png';
import './Header.css';

export default class Header extends React.Component {

    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">It's Christmas !</h1>
            </header>
        )
    }
}