//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logins from '../Screen/Login';
import Homes from '../Screen/Home';
import Searchs from '../Screen/Search';
import Librarys from '../Screen/Library';
import Profiles from '../Screen/Profile';
import BottomNavigator from './BottomNavigation';
import SplashScreen from '../Screen/Splash';
import LoginScreen from '../Screen/Login1';

const Stack=createStackNavigator();

// create a component
const StackNavigator = () => {
    return (
        <View style={{flex:1,}}>
            <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash'>
                <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown:false}}/>
                <Stack.Screen name='Login' component={Logins} options={{headerShown:false}}/>
                <Stack.Screen name='Login1' component={LoginScreen} options={{headerShown:false}}/>
            <Stack.Screen name='BottomNavigation' component={BottomNavigator} options={{headerShown:false}}/>
                <Stack.Screen name='Home' component={Homes}/>
                <Stack.Screen name='Search' component={Searchs}/>
                <Stack.Screen name='Library' component={Librarys}/>
                <Stack.Screen name='Profile' component={Profiles}/>
              

            </Stack.Navigator>
                
            </NavigationContainer>
            
        </View>
    );
};

// define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

//make this component available to the app
export default StackNavigator;
