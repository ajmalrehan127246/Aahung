//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

// create a component
const Homes = () => {
  const [Show, setShow] = useState('Alls');
  const [Touch, setTouch] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Music</Text>

        <TouchableOpacity style={styles.imgvecter}>
          <Image source={require('../Asset/Notification.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.imgvecter1}>
          <Image source={require('../Asset/Settings.png')} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        <View style={styles.toptab}>
          <TouchableOpacity
            onPress={() => setShow('Alls')}
            style={{
              display: 'flex',
              flexdirection: 'column',
              justifycontent: 'center',
              alignItems: 'center',
              padding: 10,
              marginLeft: 20,
              width: 41,
              height: 37,
              backgroundColor: Show === 'Alls' ? '#F92457' : '#E5E5E5',
              borderRadius: 10,
            }}>
            <Text style={styles.text1}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setShow('Albums')}
            style={{
              display: 'flex',
              flexdirection: 'column',
              justifycontent: 'center',
              alignItems: 'center',
              padding: 10,
              marginLeft: 20,
              width: 73,
              height: 37,
              backgroundColor: Show === 'Albums' ? '#F92457' : '#E5E5E5',
              borderRadius: 10,
            }}>
            <Text style={styles.text1}>Album</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setShow('Playlists')}
            style={{
              display: 'flex',
              flexdirection: 'column',
              justifycontent: 'center',
              alignItems: 'center',
              padding: 10,
              marginLeft: 20,
              width: 82,
              height: 39,
              backgroundColor: Show === 'Playlists' ? '#F92457' : '#E5E5E5',
              borderRadius: 10,
            }}>
            <Text style={styles.text1}>Playlist</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setShow('Artists')}
            style={{
              display: 'flex',
              flexdirection: 'column',
              justifycontent: 'center',
              alignItems: 'center',
              padding: 10,
              marginLeft: 20,
              width: 70,
              height: 37,
              backgroundColor: Show === 'Artists' ? '#F92457' : '#E5E5E5',
              borderRadius: 10,
            }}>
            <Text style={styles.text1}>Artist</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setShow('Explores')}
            style={{
              display: 'flex',
              flexdirection: 'column',
              justifycontent: 'center',
              alignItems: 'center',
              padding: 10,
              marginLeft: 10,
              width: 90,
              height: 37,
              backgroundColor: Show === 'Explores' ? '#F92457' : '#E5E5E5',
              borderRadius: 10,
              order: 4,
            }}>
            <Text style={styles.text1}>Explore</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {(() => {
        if (Show === 'Alls') {
          return (
            <ScrollView>
              <View
                style={{
                  // marginTop:50,
                  backgroundColor: '#1E1E1E',
                  width: '100%',
                  height: h('125%'),
                }}>
                <View
                  style={{
                    marginLeft: '5%',
                    marginTop: '5%',
                    // backgroundColor: 'red',
                    width: '60%',
                    height: h('5%'),
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 20,
                      fontWeight: '500',
                      fontStyle: 'normal',
                    }}>
                    Your favourite artists
                  </Text>
                </View>

                <View
                  style={{
                    width: '100%',
                    height: h('25%'),
                    // backgroundColor: 'yellow',
                    flexDirection: 'row',
                  }}>
                  <ScrollView horizontal>
                    <TouchableOpacity
                      style={{
                        width: 150,
                        height: 150,
                        marginLeft: 10,
                        marginTop: 10,
                        borderRadius: 100,
                      }}>
                      <Image
                        style={{width: 150, height: 150, borderRadius: 100}}
                        source={require('../Asset/neha.png')}
                        resizeMode="contain"
                      />
                      <View style={{marginTop: '3%', marginLeft: '18%'}}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#FFFFFF',
                            fontWeight: '500',
                            fontStyle: 'normal',
                          }}>
                          Neha Kakkar
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        width: 150,
                        height: 150,
                        backgroundColor: 'yellow',
                        marginLeft: 10,
                        marginTop: 10,
                        borderRadius: 100,
                      }}>
                      <Image
                        style={{width: 150, height: 150, borderRadius: 100}}
                        source={require('../Asset/arjith.png')}
                        resizeMode="contain"
                      />
                      <View style={{marginTop: '3%', marginLeft: '25%'}}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#FFFFFF',
                            fontWeight: '500',
                            fontStyle: 'normal',
                          }}>
                          Arijit Singh
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        width: 150,
                        height: 150,
                        backgroundColor: 'yellow',
                        marginLeft: 10,
                        marginTop: 10,
                        borderRadius: 100,
                      }}>
                      <Image
                        style={{width: 150, height: 150, borderRadius: 100}}
                        source={require('../Asset/halsey.png')}
                        resizeMode="contain"
                      />
                      <View style={{marginTop: '3%', marginLeft: '35%'}}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#FFFFFF',
                            fontWeight: '500',
                            fontStyle: 'normal',
                          }}>
                          Halsey
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        width: 150,
                        height: 150,
                        backgroundColor: 'yellow',
                        marginLeft: 10,
                        marginTop: 10,
                        borderRadius: 100,
                      }}>
                      <Image
                        style={{width: 150, height: 150, borderRadius: 100}}
                        source={require('../Asset/justin.png')}
                        resizeMode="contain"
                      />
                      <View style={{marginTop: '3%', marginLeft: '20%'}}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#FFFFFF',
                            fontWeight: '500',
                            fontStyle: 'normal',
                          }}>
                          Justin Bieber
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        width: 150,
                        height: 150,
                        backgroundColor: 'yellow',
                        marginLeft: 10,
                        marginTop: 10,
                        borderRadius: 100,
                      }}>
                      <Image
                        style={{width: 150, height: 150, borderRadius: 100}}
                        source={require('../Asset/khumaryan.png')}
                        resizeMode="contain"
                      />
                      <View style={{marginTop: '3%', marginLeft: '20%'}}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#FFFFFF',
                            fontWeight: '500',
                            fontStyle: 'normal',
                          }}>
                          Khumariyaan
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </ScrollView>
                </View>

                <View
                  style={{
                    marginLeft: '5%',
                    marginTop: '8%',
                    // backgroundColor: 'red',
                    width: '60%',
                    height: h('4%'),
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 20,
                      fontWeight: '500',
                      fontStyle: 'normal',
                    }}>
                    Sounds of shaadi Season
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: h('28%'),
                    // backgroundColor: 'yellow',
                    flexDirection: 'row',
                  }}>
                  <ScrollView horizontal>
                    <TouchableOpacity
                      style={{
                        width: 150,
                        height: 150,

                        marginLeft: 18,
                        marginTop: 10,
                        // borderRadius: 100,
                      }}>
                      <Image
                        style={{width: 150, height: 150}}
                        source={require('../Asset/mehindi.png')}
                      />
                      <View style={{marginTop: '3%'}}>
                        <Text
                          style={{
                            fontSize: 13,
                            color: '#A0A0A0',
                            fontStyle: 'normal',
                          }}>
                          Song complimenting your mehndi rasam.
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        width: 150,
                        height: 150,
                        backgroundColor: 'yellow',
                        marginLeft: 18,
                        marginTop: 10,
                      }}>
                      <Image
                        style={{width: 150, height: 150}}
                        source={require('../Asset/shadi.png')}
                      />
                      <View style={{marginTop: '3%'}}>
                        <Text
                          style={{
                            fontSize: 13,
                            color: '#A0A0A0',
                            fontStyle: 'normal',
                          }}>
                          Neha Kakkar ,arijit singh, Pritm,Tanishk Bagchi
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        width: 150,
                        height: 150,
                        backgroundColor: 'yellow',
                        marginLeft: 18,
                        marginTop: 10,
                      }}>
                      <Image
                        style={{width: 150, height: 150}}
                        source={require('../Asset/bhangra.png')}
                      />
                      <View style={{marginTop: '3%'}}>
                        <Text
                          style={{
                            fontSize: 14,
                            color: '#A0A0A0',
                            fontStyle: 'normal',
                          }}>
                          We are your in-house band baaja bringing..
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        width: 150,
                        height: 150,
                        backgroundColor: 'yellow',
                        marginLeft: 18,
                        marginTop: 10,
                      }}>
                      <Image
                        style={{width: 150, height: 150}}
                        source={require('../Asset/baraat.png')}
                      />
                      <View style={{marginTop: '3%'}}>
                        <Text
                          style={{
                            fontSize: 14,
                            color: '#A0A0A0',
                            fontStyle: 'normal',
                          }}>
                          Songs to hype up the baraat walay.
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        width: 150,
                        height: 150,
                        backgroundColor: 'yellow',
                        marginLeft: 18,
                        marginTop: 10,
                      }}>
                      <Image
                        style={{width: 150, height: 150}}
                        source={require('../Asset/dulhan.png')}
                      />
                      <View style={{marginTop: '3%'}}>
                        <Text
                          style={{
                            fontSize: 14,
                            color: '#A0A0A0',
                            fontStyle: 'normal',
                          }}>
                          Slow romantic songs to soundtrack a perfect.
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </ScrollView>
                </View>

                <View
                  style={{
                    marginLeft: '5%',
                    marginTop: '6%',
                    // backgroundColor: 'red',
                    width: '60%',
                    height: h('4%'),
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 20,
                      fontWeight: '500',
                      fontStyle: 'normal',
                    }}>
                    Pakistani Pop
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: h('27%'),
                    // backgroundColor: 'yellow',
                    flexDirection: 'row',
                  }}>
                  <ScrollView horizontal>
                    <TouchableOpacity
                      style={{
                        width: 150,
                        height: 150,

                        marginLeft: 18,
                        marginTop: 10,
                        // borderRadius: 100,
                      }}>
                      <Image
                        style={{width: 150, height: 150}}
                        source={require('../Asset/pakistanpop.png')}
                      />
                      <View style={{marginTop: '3%'}}>
                        <Text
                          style={{
                            fontSize: 13,
                            color: '#A0A0A0',
                            fontStyle: 'normal',
                          }}>
                          Haddiqa kiani, Rahat fateh Ali Khan,Atif Aslam.
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        width: 150,
                        height: 150,

                        marginLeft: 18,
                        marginTop: 10,
                        // borderRadius: 100,
                      }}>
                      <Image
                        style={{width: 150, height: 150}}
                        source={require('../Asset/pakistanpop1.png')}
                      />
                      <View style={{marginTop: '3%'}}>
                        <Text
                          style={{
                            fontSize: 13,
                            color: '#A0A0A0',
                            fontStyle: 'normal',
                          }}>
                          kaifi Khalil, Haddiqa kiani, Aima Baig ,Atif Aslam.
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        width: 150,
                        height: 150,

                        marginLeft: 18,
                        marginTop: 10,
                        // borderRadius: 100,
                      }}>
                      <Image
                        style={{width: 150, height: 150}}
                        source={require('../Asset/pakistanpop3.png')}
                      />
                      <View style={{marginTop: '3%'}}>
                        <Text
                          style={{
                            fontSize: 13,
                            color: '#A0A0A0',
                            fontStyle: 'normal',
                          }}>
                          This is Atif Aslam. All tracks in one playlist.
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        width: 150,
                        height: 150,

                        marginLeft: 18,
                        marginTop: 10,
                        // borderRadius: 100,
                      }}>
                      <Image
                        style={{width: 150, height: 150}}
                        source={require('../Asset/pakistanpop2.png')}
                      />
                      <View style={{marginTop: '3%'}}>
                        <Text
                          style={{
                            fontSize: 13,
                            color: '#A0A0A0',
                            fontStyle: 'normal',
                          }}>
                          Rovalio, Haddiqa kiani, Kaifi Khalil, Atif Aslam.
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        width: 150,
                        height: 150,

                        marginLeft: 18,
                        marginTop: 10,
                        // borderRadius: 100,
                      }}>
                      <Image
                        style={{width: 150, height: 150}}
                        source={require('../Asset/pakistanpop4.png')}
                      />
                      <View style={{marginTop: '3%'}}>
                        <Text
                          style={{
                            fontSize: 13,
                            color: '#A0A0A0',
                            fontStyle: 'normal',
                          }}>
                          This is Hadiqa Kiani. All tracks in one playlist.
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </ScrollView>
                </View>
              </View>
            </ScrollView>
          );
        } else if (Show === 'Albums') {
          return (
            <ScrollView>
              <View
                style={{
                  width: '100%',
                  height: h('102%'),
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  backgroundColor: '#1E1E1E',
                  marginHorizontal: 20,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    marginVertical: 10,
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                  }}>
                  Explore The Album
                </Text>

                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={{
                      width: 150,
                      height: 150,
                      borderWidth: 4,
                      borderColor: '#FFFFFF',
                      marginTop: 10,
                      borderRadius: 10,
                      // backgroundColor:'red'
                    }}
                    onPress={()=> setTouch(true)}>
                    <Image
                      style={{width: 144, height: 144, borderRadius: 10}}
                      source={require('../Asset/islamic.png')}
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        marginVertical: 10,
                        color: '#FFFFFF',
                        // fontWeight: 'bold',
                        marginLeft: 20,
                      }}>
                      Islamic - Mix
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      width: 150,
                      height: 150,
                      borderWidth: 4,
                      borderColor: '#FFFFFF',
                      marginTop: 10,
                      borderRadius: 10,
                      // backgroundColor:'red',
                      marginLeft: 35,
                    }}>
                    <Image
                      style={{width: 144, height: 144, borderRadius: 10}}
                      source={require('../Asset/durad.png')}
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        marginVertical: 10,
                        color: '#FFFFFF',
                        // fontWeight: 'bold',
                        marginLeft: 20,
                      }}>
                      Durod - Sharif
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={{
                      width: 150,
                      height: 150,
                      borderWidth: 4,
                      borderColor: '#FFFFFF',
                      marginTop: 50,
                      borderRadius: 10,
                      // backgroundColor:'red'
                    }}>
                    <Image
                      style={{width: 144, height: 144, borderRadius: 10}}
                      source={require('../Asset/quran.png')}
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        marginVertical: 10,
                        color: '#FFFFFF',
                        // fontWeight: 'bold',
                        marginLeft: 16,
                      }}>
                      Quranic - Sura
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      width: 150,
                      height: 150,
                      borderWidth: 4,
                      borderColor: '#FFFFFF',
                      marginTop: 50,
                      borderRadius: 10,
                      // backgroundColor:'red',
                      marginLeft: 35,
                    }}>
                    <Image
                      style={{width: 144, height: 144, borderRadius: 10}}
                      source={require('../Asset/ali.png')}
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        marginVertical: 10,
                        color: '#FFFFFF',
                        // fontWeight: 'bold',
                        marginLeft: 30,
                      }}>
                      All Zikirs
                    </Text>
                  </TouchableOpacity>
                </View>
                

                {Touch === false ? (
                  <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={{
                      width: 150,
                      height: 150,
                      borderWidth: 4,
                      borderColor: '#FFFFFF',
                      marginTop: 50,
                      borderRadius: 10,
                      // backgroundColor:'red'
                    }}>
                    <Image
                      style={{width: 144, height: 144, borderRadius: 10}}
                      source={require('../Asset/Arabian.png')}
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        marginVertical: 10,
                        color: '#FFFFFF',
                        // fontWeight: 'bold',
                        marginLeft: 30,
                      }}>
                      Arabian
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      width: 150,
                      height: 150,
                      borderWidth: 4,
                      borderColor: '#FFFFFF',
                      marginTop: 50,
                      borderRadius: 10,
                      // backgroundColor:'red',
                      marginLeft: 35,
                    }}>
                    <Image
                      style={{width: 144, height: 144, borderRadius: 10}}
                      source={require('../Asset/Happy.png')}
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        marginVertical: 10,
                        color: '#FFFFFF',
                        // fontWeight: 'bold',
                        marginLeft: 40,
                      }}>
                      Happy
                    </Text>
                  </TouchableOpacity>
                </View>
                ) : (
                  <TouchableOpacity
                  style={{
                    marginTop: 50,
                    width: '100%',
                    height: '15%',
                    backgroundColor: '#FFFFFF',
                    marginHorizontal: -20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    // justifyContent:'center',
                    // marginTop:'10%',
                  }}
                  onPress={()=> setTouch(false)}>
                  <View
                    style={{
                      marginVertical: 25,
                      marginHorizontal: 25,
                      flexDirection: 'row',
                    }}>
                    <Image
                      style={{width: 70, height: 70, borderRadius: 10}}
                      source={require('../Asset/islamic.png')}
                    />
                    <View style={{marginTop: 10, marginHorizontal: 15}}>
                      <Text style={{fontWeight: 'bold', color: '#1E1E1E'}}>
                        Mustafa Jaan E Rehmat Pe
                      </Text>
                      <Text>Atif Aslam, Boss Menn</Text>
                      <Image source={require('../Asset/Group11.png')} />
                      <Image
                        style={{marginHorizontal: 220, marginVertical: -30}}
                        source={require('../Asset/Group6.png')}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                )}


               
              </View>
            </ScrollView>
          );
        } else if (Show === 'Playlists') {
          return (
            <View
              style={{
                width: '100%',
                height: h('100%'),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1E1E1E',
              }}>
              <Text style={styles.text}>Playlists</Text>
            </View>
          );
        } else if (Show === 'Artists') {
          return (
            <View
              style={{
                width: '100%',
                height: h('100%'),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1E1E1E',
              }}>
              <Text style={styles.text}>Artists</Text>
            </View>
          );
        } else if (Show === 'Explores') {
          return (
            <View
              style={{
                width: '100%',
                height: h('100%'),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1E1E1E',
              }}>
              <Text style={styles.text}>Explores</Text>
            </View>
          );
        }
      })()}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  header: {
    width: '100%',
    height: h('7%'),
    flexDirection: 'row',
    marginTop: 29,
    paddingLeft: 27,
    // backgroundColor:'red'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '700',
    fontStyle: 'italic',
  },
  imgvecter: {
    marginLeft: '45%',
    width: 25,
    height: 25,
    resizeMode: 'contain',
    Color: '#FFFFFF',
    opacity: 90,
  },
  imgvecter1: {
    marginLeft: '7%',
    width: 25,
    height: 25,
    resizeMode: 'contain',
    Color: '#FFFFFF',
    opacity: 90,
  },
  toptab: {
    flexDirection: 'row',
    width: '100%',
    height: h('8%'),
    // backgroundColor:'yellow',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#A0A0A0',
    marginTop: 5,
  },
  text1: {
    fontSize: 18,
    color: '#505050',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 21,
  },
});

//make this component available to the app
export default Homes;
