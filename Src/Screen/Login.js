//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet,Image,StatusBar,TouchableOpacity,ImageBackground} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

// create a component
const Logins = ({navigation}) => {
  
  return (
    <View style={styles.container}>
        <StatusBar hidden/>
      <ImageBackground style={styles.backgroungimg} source={require('../Asset/login1.png')}>
      <View style={styles.box1}>

      <TouchableOpacity style={styles.box2}>
    <Image style={styles.img1} source={require('../Asset/google.png')}/>
    <Text style={styles.text1}>Continue with Google</Text>
    </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
    <Text style={styles.text1}>click here for free sign up</Text>
    </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('Login1')} style={styles.button1}>
    <Text style={styles.text1}>Log in</Text>
    </TouchableOpacity>


      </View>
      </ImageBackground>

      
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
  backgroungimg:{
width:'100%',
height:h('100%')
  }, 
  box1: {
    marginTop:'120%',
    width:'100%',
    height:h('40%'),
    backgroundColor: '#000000',
    borderRadius:30,
    alignItems:'center'
  },
  box2:{
    flexDirection:'row',
    width:'65%',
    height:h('5%'),
    borderWidth:1.5,
    borderColor:'#F92457',
    marginTop:'15%',
    // marginLeft:'19%',
    alignItems:'center',
    // justifyContent:'center',
    borderRadius:35
 
  },
  img1:{
marginLeft:"15%"
  },
  text1:{
   marginLeft:'2%',
   color:'#FFFFFF',
   fontFamily:'Roboto',
   fontWeight:'800'
  },
  button:{
    width:'65%',
    height:h('5%'),
    backgroundColor:'#F92457',
    marginTop:'15%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:35
  },
  button1:{
    width:'65%',
    height:h('5%'),
    backgroundColor:'#F92457',
    marginTop:'7%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:35
  },

});

//make this component available to the app
export default Logins;
