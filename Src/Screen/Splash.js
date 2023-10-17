//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet,Image,StatusBar } from 'react-native';
import {
    widthPercentageToDP as w,
    heightPercentageToDP as h,
  } from 'react-native-responsive-screen';

// create a component
const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
      navigation.navigate('Login');
        },1000);
      
      },[]);
    return (
        <View style={styles.container}>
                   <StatusBar hidden/>
      <View style={styles.box}>
        <Image style={styles.imge} source={require('../Asset/splash.png')}/>

      </View>
      <View style={styles.box1}> 
      <Image style={{marginTop:'-4%'}} source={require('../Asset/splash1.png')} resizeMode='contain'/>
        </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#000000',
    },
    box: {
        marginTop:2,
        width:'100%',
        height:h('60%'),
      },
      imge: {
        width:'100%',
        height:h('60%'),  
      },
      box1: {
        marginTop:2,
        width:'100%',
        height:h('40%'),
        // backgroundColor: 'yellow',
      },
});

//make this component available to the app
export default SplashScreen;
