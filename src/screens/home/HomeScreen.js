/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Heading from '../../Components/Fortext/Heading';

import Temperature from '../../Components/Fortext/Temperature';
import cloudy from '../../../assets/cloudyicon.png';

const HomeScreen = ({ temperature = 0, onUpdatePress }) => {
  return (
    <SafeAreaView style={style.container}>
      <Heading />

      <View>
        <Image style={style.picture} source={cloudy} />

        <Temperature temperature={temperature} />
      </View>

      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderRadius: 4,
          padding: 10,
          borderColor: 'white',
          marginTop: 20,
        }}
        onPress={onUpdatePress}
      >
        <Text style={{ color: 'white', fontSize: 20 }}>Update</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1A4066',
    paddingTop: 20,
  },
  picture: {
    marginVertical: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
