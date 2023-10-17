//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
  Alert
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

// create a component
const LoginScreen = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const Submit= ()=>{
    if(Email === '' && Password ==='')
    {
  Alert.alert('email and password is empty');
    }
    else if (Email ==='zahoor' && Password === '1234')
    {
 navigation.navigate('BottomNavigation');
    }
    else{
        Alert.alert('email and password is incorrect');
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
        style={styles.backgroungimg}
        source={require('../Asset/login1.png')}>
        <View style={styles.box1}>
          <TextInput
            value={Email} 
            onChangeText={(text)=>setEmail(text)}
            placeholder="Email"
            placeholderTextColor={'#FFFFFF'}
            style={styles.box2}
          />
          <TextInput
            value={Password}
            onChangeText={(text)=>setPassword(text)}
            placeholder="Password"
            placeholderTextColor={'#FFFFFF'}
            secureTextEntry={true}
            style={styles.box3}
          />

          <TouchableOpacity onPress={Submit} style={styles.button}>
            <Text style={styles.text1}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1}>
            <Text style={styles.text2}>sign up instead</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  backgroungimg: {
    width: '100%',
    height: h('100%'),
  },
  box1: {
    marginTop: '120%',
    width: '100%',
    height: h('40%'),
    backgroundColor: '#000000',
    borderRadius: 30,
    alignItems: 'center',
  },
  box2: {
    width: '65%',
    height: h('5%'),
    borderWidth: 1.5,
    borderColor: '#F92457',
    marginTop: '15%',
    borderRadius: 35,
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '700',
  },
  box3: {
    width: '65%',
    height: h('5%'),
    borderWidth: 1.5,
    borderColor: '#F92457',
    marginTop: '5%',
    borderRadius: 35,
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '700',
  },
  text1: {
    marginLeft: '8%',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontWeight: '800',
  },
  button: {
    width: '65%',
    height: h('5%'),
    backgroundColor: '#F92457',
    marginTop: '12%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
  },
  button1: {
    width: '50%',
    height: h('4%'),
    // backgroundColor:'#F92457',
    marginTop: '3%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    marginLeft: '8%',
    color: '#F92457',
    fontFamily: 'Roboto',
    fontWeight: '800',
  },
});

//make this component available to the app
export default LoginScreen;
