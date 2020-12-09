/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Heading from '../../Components/Fortext/Heading';

import Temperature from '../../Components/Fortext/Temperature';
import cloudy from '../../../assets/cloudyicon.png';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <View style={style.Headingcontainer}>
          <Heading />
        </View>

        <View>
          <Image style={style.pic} source={cloudy} />
          <Temperature />
        </View>
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  Headingcontainer: {
    height: 15,
  },

  container: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1A4066',
  },
  pic: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
