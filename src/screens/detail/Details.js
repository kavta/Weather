import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#1A4066',
    flex: 1,
  },
  todays: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },

});

const Details = () => {
  const [Weather, setWeather] = useState();
  useEffect(() => {
    async function getWeather() {
      try {
        const { data } = await axios.get(
          'https://api.openweathermap.org/data/2.5/forecast?q=kathmandu&appid=bfb0f059129cba17a682d20328838e3f&units=metric'
        );
        setWeather(data);
      } catch (e) {
        console.warn(e);
      }

    }
    getWeather();
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.todays}>
        Temperature:{Weather?.list[0]?.main?.temp}&deg;C
        Date: {Weather?.list[0]?.dt_txt}
      </Text>
    </View>
  );
};
export default Details;
