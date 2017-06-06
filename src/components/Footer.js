import React,{Component} from 'react';
import squid from '../squid.svg';

export default class Error extends Component {
    render(){
       
        return(
            <div className="footer">
                <div className="footer-icon">
                    <img src={squid} alt="" className="footer-img" />
                    <span className="footer-text">v 0.0.2 By Anla Design</span>
                </div>
            </div>
        )
    }
}