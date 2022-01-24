import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CounterCard from './src/App.js';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CounterCard/>
        <Text style={styles.Text}>Counters are epic</Text>
        <CounterCard/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0,181,157)',
  },
  Text:{
    fontSize: 40,
    fontWeight: '300',
    color: 'rgb(255,255,255)',

  }
});