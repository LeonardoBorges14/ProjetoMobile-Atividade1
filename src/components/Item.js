/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Item = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={props.imageUri} />
            <Text style={styles.text}>{props.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        width: 150,
        height: 150,
        backgroundColor: 'white',
        marginRight: 15,
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'column',

    },
    text: {
        color: 'blue',
        textAlign: 'center',
        fontSize: 15,
        color: 'gray',
        fontWeight: '400',
        top: 25,
    },

    img: {
        width: 50,
        height: 90,
        left: 50,
        top: 20,
    },
});

export default Item;
