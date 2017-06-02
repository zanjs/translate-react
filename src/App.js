import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Textarea from './components/Textarea';
import TransResult from './components/TransResult';
import Error from './components/Error';
import {isChinese} from './util/index';
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

    if(isChinese(val)){

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

    axios.post('http://192.168.1.184:8700/api/translate/text',{
      text: val,
    })
    .then(function(response) {
     
      let data = response.data
       console.log(data);
       
       that.setState({ 
         transResult: data.text ,
         transResultLang: data.from.language.iso,
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
      <div>
        <Header loading={this.state.loading}/>
        <Textarea changeVal={this.changeVal} />
        <TransResult result={this.state.transResult} lang={this.state.transResultLang} />
        <Error error={this.state.error} errorMsg={this.state.errorMsg} />
      </div>
    );
  }
}

export default App;
