/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';

const styles = StyleSheet.create(
  {
    Statename: {
      fontSize: 30,
      color: 'white',
      textAlign: 'center',
    },
    days:
    {
      fontSize: 23,
      color: 'white',
      textAlign: 'center'
    },
    picture: {
      height: 300,
      width: 250,
      marginLeft: 'auto',
      marginRight: 'auto',

    }
  }
);
// console.log(DATA[day]);
export default function Heading({ currentWeather }) {
  const icon = currentWeather?.weather[0]?.icon;
  // console.log(icon);
  // console.log(day);
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.Statename}>KATHMANDU </Text>
        <Text style={styles.days}>
          {moment.unix(currentWeather?.dt).format('ddd')},{'\t'}
          {moment.unix(currentWeather?.dt).format('LL')}
        </Text>
        <Image style={styles.picture} source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }} />
      </View>
    </SafeAreaView>
  );
}
