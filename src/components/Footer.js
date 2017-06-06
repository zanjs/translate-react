import React,{Component} from 'react';
import logo from '../logo.svg';

export default class Error extends Component {
    render(){
       
        return(
            <div className="footer">
                <div className="footer-icon">
                    <img src={logo} alt="" className="footer-img" />
                    <span className="footer-text">v 0.0.5 By Anla Design ©2017 anla.io 版权所有</span>
                </div>
            </div>
        )
    }
}