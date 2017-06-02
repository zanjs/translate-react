import React,{Component} from 'react';
import errorIcon from '../error.svg';

export default class Error extends Component {
    render(){
        const {error,errorMsg} = this.props
        const isError = error ? "error-box" : "error-box hide"
        const msg = errorMsg ? errorMsg : "发生了错误 ┭┮﹏┭┮, 请休息一下稍后再试"
        return(
            <div className={isError}>
                <div className="error-text">{msg}</div>
                <div className="error-icon">
                    <img src={errorIcon} alt=""/>
                </div>
            </div>
        )
    }
}