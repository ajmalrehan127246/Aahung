//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
  
} from 'react-native';
import {
    widthPercentageToDP as w,
    heightPercentageToDP as h,
  } from 'react-native-responsive-screen';
  import Icon from 'react-native-vector-icons/AntDesign';
  import Icon1 from 'react-native-vector-icons/FontAwesome5'

// create a component
const Searchs = () => {
  return (
    <View style={styles.container}>

      <TouchableOpacity>
         <Image style={styles.img} source={require('../Asset/voice1.png')} />
      </TouchableOpacity>
      <Text style={styles.text}>Find Song</Text>

    <View style={{flexDirection:'row'}}>
      <View style={styles.box}>
     
      <TextInput style={styles.textinput}
         placeholder='Search music'
        />
         <Icon style={styles.vecter} name='search1' size={25} color={'#A0A0A0'}/>
         
        </View>
        <TouchableOpacity>
        <Icon1 style={styles.vecter1} name='sliders-h' size={22} color={'#F4F4F4'}/>
        </TouchableOpacity>
        </View>

        <ScrollView>

        <Text style={{
            color:'#FFFFFF',
            fontSize:18,
            fontFamily:'Roboto',
            fontStyle:'normal',
            fontWeight:'700',
            marginLeft:22,
            marginTop:40,
            }}>
                Your top genres
            </Text>
        
        <View style={{flexDirection:'row',marginTop:8}}>
        <TouchableOpacity style={styles.box1}>

            <Text style={styles.text1}>Pop</Text>
            <Image style={styles.img1} source={require('../Asset/pop.png')}/>

        </TouchableOpacity>
        <TouchableOpacity style={styles.box2}>

            <Text style={styles.text1}>Jazz</Text>
            <Image style={styles.img1} source={require('../Asset/jazz.png')}/>

        </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row',marginTop:8}}>
        <TouchableOpacity style={styles.box3}>

            <Text style={styles.text1}>Hard Rock</Text>
            <Image style={styles.img1} source={require('../Asset/hardrock.png')}/>

        </TouchableOpacity>
        <TouchableOpacity style={styles.box4}>

            <Text style={styles.text1}>Hip Hop</Text>
            <Image style={styles.img1} source={require('../Asset/hiphop.png')}/>

        </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row',marginTop:8}}>
        <TouchableOpacity style={styles.box5}>

            <Text style={styles.text1}>Classic</Text>
            <Image style={styles.img1} source={require('../Asset/classic.png')}/>

        </TouchableOpacity>
        <TouchableOpacity style={styles.box6}>

            <Text style={styles.text1}>Rock</Text>
            <Image style={styles.img1} source={require('../Asset/rock.png')}/>

        </TouchableOpacity>
        </View>

        <Text style={{
            color:'#FFFFFF',
            fontSize:18,
            fontFamily:'Roboto',
            fontStyle:'normal',
            fontWeight:'700',
            marginLeft:22,
            marginTop:30,
            }}>
                Browse all
            </Text>

           

            <View style={{flexDirection:'row',marginTop:8}}>
        <TouchableOpacity style={styles.box5}>

            <Text style={{
                width:65,
                height:30, 
                 fontFamily:'Roboto',
                 marginLeft:10,
               fontWeight:'400',
               fontStyle:'normal',
               color:'#FFFFFF',
             marginTop:18,}}>
        Bollywood
        </Text>
            <Image style={styles.img2} source={require('../Asset/bollywood2.png')} />

        </TouchableOpacity>
        <TouchableOpacity style={styles.box6}>

            <Text style={styles.text1}>Party</Text>
            <Image style={styles.img2} source={require('../Asset/party.png')}/>

        </TouchableOpacity>
        </View>
            <View style={{flexDirection:'row',marginTop:8}}>
        <TouchableOpacity style={styles.box5}>

            <Text style={styles.text1}>in car</Text>
            <Image style={styles.img2} source={require('../Asset/car.png')}/>

        </TouchableOpacity>
        <TouchableOpacity style={styles.box6}>

            <Text style={styles.text1}>mood</Text>
            <Image style={styles.img2} source={require('../Asset/mood.png')}/>

        </TouchableOpacity>
        </View>

        </ScrollView>


       
     
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position:'absolute',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },

//   img: {
//     // position: 'absolute',
//     flexDirection:'row',
//     width: 90,
//     height: 90,
//     backgroundColor: 'red',
//     marginLeft: 162,
//     marginTop: 48,
//     borderRadius: 100 / 2,
//     opacity: 0.1,
//   },
  img: {
    width: 90,
    height: 90,
    marginLeft: 162,
    marginTop: 48,
    borderRadius: 100 / 2,
  
  },
  text: {
    width: 75,
    height: 20,
    marginLeft: 171,
    marginTop: 15,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
    // backgroundColor:'red'
  },
  box:{
    flexDirection:'row',
    width: '70%',
    height:h('4.5%'),
    marginLeft: 20,
    marginTop: 30,
    backgroundColor: '#F4F4F4',
    borderRadius: 18,
    paddingLeft:22,
    fontSize:14,
    fontFamily:'Roboto',
    fontWeight:'400',
    fontStyle:'normal',
    color:'#A0A0A0',
  },
  textinput: {
    flex:1,
  },
  vecter:{
marginTop:5,
marginRight:10

  },
  vecter1:{
marginTop:38,
marginLeft:33,

  },

  box1:{
    // position: absolute;
    flexDirection:'row',
    width: 160,
    height: 67,
    marginLeft: 30,
    marginTop: 10,
    
backgroundColor: '#FF5B5B',
    // opacity: 0.7,
    borderRadius: 4,
  },

  text1:{
    fontSize:15,
    fontFamily:'Roboto',
    fontWeight:'400',
    fontStyle:'normal',
    marginTop:15,
    marginLeft:20,
    color:'#FFFFFF',
    width:50,
    height:36
  },
  img1:{
   marginLeft:20,
   marginTop:3,
  },
  box2:{
    // position: absolute;
    flexDirection:'row',
    width: 160,
    height: 67,
    marginLeft: 15,
    marginTop: 10,
    
backgroundColor: '#E17000',
    // opacity: 0.7,
    borderRadius: 4,
  },
  box3:{
    // position: absolute;
    flexDirection:'row',
    width: 160,
    height: 67,
    marginLeft: 26,
    marginTop: 10,
    
backgroundColor: '#0074A9',
    // opacity: 0.7,
    borderRadius: 4,
  },
  box4:{
    // position: absolute;
    flexDirection:'row',
    width: 160,
    height: 67,
    marginLeft: 15,
    marginTop: 10,
    
backgroundColor: '#038D00',
    // opacity: 0.7,
    borderRadius: 4,
  },
  box5:{
    // position: absolute;
    flexDirection:'row',
    width: 160,
    height: 67,
    marginLeft: 26,
    marginTop: 10,
    
backgroundColor: '#7500CF',
    // opacity: 0.7,
    borderRadius: 4,
  },
  box6:{
    // position: absolute;
    flexDirection:'row',
    width: 160,
    height: 67,
    marginLeft: 15,
    marginTop: 10,
    
backgroundColor: '#002BB6',
    // opacity: 0.7,
    borderRadius: 4,
  },
img2:{
    marginLeft:5,
    width:58,
    height:48,
    transform:[{rotate:'-15deg'}],
    marginTop:8,
    marginLeft:20

//  color:'#7500CF'

},
  
  

  

  
});

//make this component available to the app
export default Searchs;
