import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  weather: {
    fontSize: 65,
    color: 'white',
  },
  weatherDetails: {
    fontSize: 19,
    color: 'white'
  },
  verticalLines: {
    height: 70,
    width: 2,
    backgroundColor: 'gray',
  },
});
const Temperature = ({ currentWeather }) => {
  // console.log(currentWeather);
  return (
    <View style={styles.container}>
      <Text style={styles.weather}>
        {currentWeather?.temp.toFixed(0)}&deg;C
      </Text>

      <View style={styles.verticalLines} />

      <Text style={styles.weatherDetails}>{currentWeather?.weather[0]?.description}{'\n'}
        Sunrise: {moment.unix(currentWeather?.sunrise).format('LT')}{'\n'}
        Sunset: {moment.unix(currentWeather?.sunset).format('LT')}
      </Text>

    </View>
  );
};

export default Temperature;
