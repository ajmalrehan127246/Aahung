//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StackNavigator from './Src/Navigation/StackNavigation';

// create a component
const MyApp = () => {
  return (
    <View style={{flex:1,backgroundColor:'#ffff'}}>
     <StackNavigator/>
    </View>
  );
};

// define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffff',
//   },
// });

//make this component available to the app
export default MyApp;
