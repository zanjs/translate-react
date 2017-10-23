import React, { Component } from 'react';
import axios from 'axios';
import Particles from 'react-particles-js';

import Header from './components/Header';
import Textarea from './components/Textarea';
import TransResult from './components/TransResult';
import Error from './components/Error';
import Footer from './components/Footer';
import {isAllChinese} from './util/index';
// import {Host} from './config/index'
import './App.css';


class App extends Component {

  state = {
    loading:false,
    transResult: '',
    error:false,
    errorMsg:'',
    transResultLang: ''
  }

  initData = () => {
    this.setState({
      loading:false,
      error:false,
    })
  }

  changeVal = val => {

    const that = this

    if(!val){
      return
    }

    if(isAllChinese(val)){

      that.setState({
        error:true,
        errorMsg:'你想搞事情吗? 不可以输入中文(⊙o⊙)？',
      })

      return
    }

    that.setState({
      loading: true,
      error:false,
      errorMsg:"",
    })

    axios.post(`/api/translate/text`,{
      text: val,
    })
    .then(function(response) {
     
      let data = response.data
       console.log(data)
       JSON.stringify(data)
       that.setState({ 
         transResult: data.result[0] ,
         transResultLang: data.from,
         loading:false
        })

    }).catch(function(ex) {
      console.log('parsing failed', ex)
      that.setState({
        loading:false,
        error:true,
      })
    })

  }

  render() {
    return (
      <div className="main">
        <Particles
          style={{
              position: "fixed",
              top: 0,
              left: 0,
              zIndex:-1,
              width: "100%",
              height: "100%"
          }}
         />
        <Header loading={this.state.loading}/>
        <Textarea changeVal={this.changeVal} />
        <TransResult result={this.state.transResult} lang={this.state.transResultLang} />
        <Error error={this.state.error} errorMsg={this.state.errorMsg} />
        <Footer />
      </div>
    );
  }
}

export default App;
