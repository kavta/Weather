/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const date = new Date();
const day = date.getDay();
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
// console.log(DATA[day]);
export default function Heading() {

  // console.log(day);
  return (
    <View>
      <Text style={style.Statename}>KATHMANDU </Text>
      <Text style={style.days}>{weekday[day]} </Text>
    </View>
  );
}

const style = StyleSheet.create({
  Statename: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  },
  days:
  {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
});
