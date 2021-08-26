/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import Home from './src/components/Home.js';


const App = () => {

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <Text style={styles.title}>ListaProdutos</Text>
        <Home/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  title: {
    fontSize: 25,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  background: {
    backgroundColor:'white',
  },
});

export default App;
