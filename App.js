import React from 'react';
import {Provider} from 'react-redux';
import type {Element as ReactElement} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './modules/header';
import Indicator from './modules/indicator';
import Graph from './modules/graph';

import './assets/css/index.css';

// import configureStore from './store/ConfigureStore';

// const store = configureStore();

class App extends React.PureComponent<any, any>{
  constructor(props:any) {
    super(props);
    this.state = {speed: 20,interval:10};
    this.getSpeed = this.getSpeed.bind(this);
  }

  renderContent() {
    return (
      <div onClick={this.getSpeed}>
        <Header interval={this.state.interval} />
        <Indicator speed={this.state.speed} unit="Mbps" />
        <Graph />
      </div>
    )
  }
  render(){
    const content = this.renderContent();
    return content;
  }
  getSpeed(){
    var link = "http://i3.ytimg.com/vi/E95STK2tnoM/maxresdefault.jpg";
    var size = 66126;//bites
    var startTime, endTime;
    var download = new Image();
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = link + cacheBuster;
    download.onload = function () {
        endTime = (new Date()).getTime();
        getResults(endTime);
    }
    let getResults = (endTime)=>{
      let duration = (endTime - startTime) / 1000;
      let bitsLoaded = size * 8;
      var speedBps = (bitsLoaded / duration).toFixed(2);
      var speedKbps = (speedBps / 1024).toFixed(2);
      var speedMbps = (speedKbps / 1024).toFixed(2);
      this.setState({speed: speedMbps});
      if(localStorage.getItem('history') === null){
        localStorage.setItem('history',JSON.stringify([0]));
      }
      let h = JSON.parse(localStorage.getItem('history'));
      h.push(speedMbps)
      localStorage.setItem('history',JSON.stringify(h));
      return speedMbps;
    }
  }
}
export default  App;
