//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Alls = () => {
    return (
        <View style={{ flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffff',}}>
            <Text>Alls</Text>
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
export default Alls;
