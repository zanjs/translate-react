import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Header extends Component {
    render() {
        const { loading } = this.props
        const isLoading = loading ? "dotting" : ""
        return (
        <div className="App">
            <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>皮皮球翻译 
                <span className={isLoading}></span>
                </h2>
            </div>
        </div>
        )
  }
}