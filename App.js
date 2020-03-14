import React from 'react';
import {Provider} from 'react-redux';
import type {Element as ReactElement} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './modules/header';

import './assets/css/index.css';

// import configureStore from './store/ConfigureStore';

// const store = configureStore();

class App extends React.PureComponent<any, any>{
  constructor(props:any) {
    super(props);
  }

  renderContent() {
    return (
        <Header interval="10" />
    )
  }

  render(){
    const content = this.renderContent();
    return content;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default  App;
