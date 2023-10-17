//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Albums = () => {
    return (
        <View style={{flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffff',}}>
            <Text>Albums</Text>
        </View>
    );
};

// define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#ffff',
//     },
// });

//make this component available to the app
export default Albums;
