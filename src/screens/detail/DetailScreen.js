import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#1A4066',
    flex: 1,
    padding: 20
    // flexDirection: 'column',
  },
  todays: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    flexDirection: 'column'
  },
  days:
  {
    color: 'white',
    fontSize: 18,
    flexDirection: 'column'

  },

});

const latitude = 27.6704163;
const longitude = 85.3239504;

const DetailScreen = () => {
  const [Weather, setWeather] = useState();

  useEffect(() => {
    async function getWeather() {
      try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=bfb0f059129cba17a682d20328838e3f`);
        setWeather(data);
      } catch (e) {
        console.warn(e);
      }

    }
    getWeather();
  }, []);

  // const weekdays = Weather?.list[0]?.dt_txt;
  const temp = [];
  const date = [];
  // const weatherlength= Weather?.list.length;
  // console.log(weatherlength);
  for (let i = 0; i < 7; i += 1) {
    temp[i] = Weather?.list[i]?.main?.temp;
    date[i] = Weather?.list[i]?.dt * 1000;
  }
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // console.log(temp);
  // console.log(new Date(weekday(day)));
  console.log(new Date(date[0]).getHours());
  return (
    <View style={style.container}>
      <View>
        <Text style={style.todays}>DAY: </Text>
        {
        date.map((value) => {
          return (
            <>
            {/* <View style={{ width: 250 ,height:50}}> */}
              <Text style={style.days}>{weekday[new Date(value).getDay()]}</Text>
            {/* </View> */}
            </>
          );
        })
        }
      </View>

      <View>
        <Text style={style.todays}>
          Temperature:{temp}&deg;C
          {/* Temperature:{Weather?.list[0]?.main?.temp}&deg;C */}
        </Text>
      </View>
    </View>
  );
};
export default DetailScreen;
