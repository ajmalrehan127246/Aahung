//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homes from '../Screen/Home';
import Searchs from '../Screen/Search';
import Librarys from '../Screen/Library';
import Profiles from '../Screen/Profile';

const Tab=createBottomTabNavigator();

// create a component
const BottomNavigator = () => {
    return (
        <View style={{flex:1,backgroundColor:'#ffff'}}>
            <Tab.Navigator
             initialRouteName="Home"
             screenOptions={{
               headerShown: false,
               tabBarStyle: {
                 backgroundColor: '#000000',
                 height: 65,
               
                 paddingBottom: 8,
                 borderTopWidth:1,
                 borderColor:'#000000',
                //  borderRadius:20,
  
                 borderTopColor: '#000000',
                 elevation: 0,
                 shadowColor: '#000000',
                 shadowOpacity: 0,
                 shadowOffset: {
                   height: 0,
                 },
                 shadowRadius: 0,
                
                 // paddingVertical:10
               },
               
             }}>

<Tab.Screen
             name="Home"
              component={Homes}
              
             options={{
               headerShown: false,
               tabBarLabel: 'Home',
               tabBarInactiveTintColor: '#FFFFFF',
               tabBarActiveTintColor: '#F92457',
               
               tabBarIcon: ({color, size, focused}) => (
                 <View
                   style={{
                    //  borderTopWidth: focused ? 2 : 0,
                    //  borderColor: focused ? '#394F2A' :'blue',
                    //  width: '10%',
                     alignItems: 'center', 
                     borderTopLeftRadius: 3,
                     borderTopRightRadius: 3,
                        
                   
                   }}>
                   <Image
                     source={require('../Asset/home.png')}
                     style={{
                       width: 25,
                       height: 25,
                       resizeMode: 'contain',
                       tintColor: focused ? '#F92457' : '#ffff',
                     }}
                   />
                     {/* <Icon name={'home'} size={25} color={color} /> */}
                 </View>
                
                   
               ),
             }}/>
<Tab.Screen
             name="Search"
              component={Searchs}
              
             options={{
               headerShown: false,
               tabBarLabel: 'Search',
               tabBarInactiveTintColor: '#FFFFFF',
               tabBarActiveTintColor: '#F92457',
               
               tabBarIcon: ({color, size, focused}) => (
                 <View
                   style={{
                    //  borderTopWidth: focused ? 2 : 0,
                    //  borderColor: focused ? '#394F2A' :'blue',
                    //  width: '10%',
                     alignItems: 'center', 
                     borderTopLeftRadius: 3,
                     borderTopRightRadius: 3,
                        
                   
                   }}>
                   <Image
                     source={require('../Asset/search.png')}
                     style={{
                       width: 25,
                       height: 25,
                       resizeMode: 'contain',
                       tintColor: focused ? '#F92457' : '#ffff',
                     }}
                   />
                     {/* <Icon name={'home'} size={25} color={color} /> */}
                 </View>
                
                   
               ),
             }}/>
<Tab.Screen
             name="Library"
              component={Librarys}
              
             options={{
               headerShown: false,
               tabBarLabel: 'Library',
               tabBarInactiveTintColor: '#FFFFFF',
               tabBarActiveTintColor: '#F92457',
               
               tabBarIcon: ({color, size, focused}) => (
                 <View
                   style={{
                    //  borderTopWidth: focused ? 2 : 0,
                    //  borderColor: focused ? '#394F2A' :'blue',
                    //  width: '10%',
                     alignItems: 'center', 
                     borderTopLeftRadius: 3,
                     borderTopRightRadius: 3,
                        
                   
                   }}>
                   <Image
                     source={require('../Asset/library.png')}
                     style={{
                       width: 25,
                       height: 25,
                       resizeMode: 'contain',
                       tintColor: focused ? '#F92457' : '#ffff',
                     }}
                   />
                     {/* <Icon name={'home'} size={25} color={color} /> */}
                 </View>
                
                   
               ),
             }}/>
<Tab.Screen
             name="Profile"
              component={Profiles}
              
             options={{
               headerShown: false,
               tabBarLabel: 'Profile',
               tabBarInactiveTintColor: '#FFFFFF',
               tabBarActiveTintColor: '#F92457',
               
               tabBarIcon: ({color, size, focused}) => (
                 <View
                   style={{
                    //  borderTopWidth: focused ? 2 : 0,
                    //  borderColor: focused ? '#394F2A' :'blue',
                    //  width: '10%',
                     alignItems: 'center', 
                     borderTopLeftRadius: 3,
                     borderTopRightRadius: 3,
                        
                   
                   }}>
                   <Image
                     source={require('../Asset/profile.png')}
                     style={{
                       width: 25,
                       height: 25,
                       resizeMode: 'contain',
                       tintColor: focused ? '#F92457' : '#ffff',
                     }}
                   />
                     {/* <Icon name={'home'} size={25} color={color} /> */}
                 </View>
                
                   
               ),
             }}/>

            </Tab.Navigator>
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
export default BottomNavigator;
