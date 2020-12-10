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
      <Heading />
      <View>
        <Image style={style.picture} source={cloudy} />
        <Temperature />
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  picture: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
