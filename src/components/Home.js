/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Item from './Item';


const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_title}>
        <Text style={styles.title}>Lighteria</Text>
        <TouchableOpacity style={styles.btn}>
          <Image style={styles.sacola} source={require('../assets/img/icone-sacola.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.categoria_box1}>
        <View style={styles.categoria_box2}>
          <Text style={styles.categoria}>Categorias</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Item name="Abajur" imageUri={require('../assets/img/01-tablelamps.png')} />
        <Item name="Lâmpada de teto" imageUri={require('../assets/img/02-ceilinglamps.png')} />
        <Item name="Arandela" imageUri={require('../assets/img/03-sconces.png')} />
        <Item name="Luminária de chão" imageUri={require('../assets/img/04-floorlamps.png')} />
        <Item name="Lâmpada 5" imageUri={require('../assets/img/05-lightdecor.png')} />
        <Item name="Lâmpada 6" imageUri={require('../assets/img/06-garlands.png')} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(242,242,242)',
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 10,
  },

  sacola: {
    width: 30,
    height: 30,
    marginLeft: 15,
    marginTop: 15,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  container_title: {
    flexDirection: 'row',
  },
  btn: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 50,
    marginLeft: 140,
  },
  categoria: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(195,195,195)',
  },
  categoria_box1: {
    marginTop: 20,
    borderColor: '#333',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: '90%',
    marginLeft: 10,
  },
  categoria_box2: {
    width: 130,
    top: -15,
    backgroundColor: 'rgb(242,242,242)',
    left: 92.5,
    textAlign: 'center',
  },
});

export default Home;
