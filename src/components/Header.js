import React, { Component } from 'react';
// import Anime from 'react-anime';
import logo from '../logo.svg';
import LogoGather from './LogoGather';

export default class Header extends Component {
    render() {
        const { loading } = this.props
        const isLoading = loading ? "dotting" : ""
        return (
        <div className="App">
            <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="logo-name"> 虾翻译官
                <span className={isLoading}></span>
                </div>
            </div>
            <LogoGather />
        </div>
        )
  }
}