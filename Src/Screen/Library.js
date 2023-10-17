import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
} from 'react-native';

const Librarys = () => {
    return(
  <View style={styles.container}>
    <Text>Library</Text>

  </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFFFFF',
    alignItems:'center',
    justifyContent:'center',
  },
  
});

export default Librarys;