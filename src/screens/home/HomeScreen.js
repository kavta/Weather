import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import axios from 'axios';
import Temperature from '../../Components/Fortext/Temperature';
import Heading from '../../Components/Fortext/Heading';
import whiteArrow from '../../../assets/arrow_white.png';
import whiteRefresh from '../../../assets/refresh_white.png';

const styles = StyleSheet.create({
  flexRoot: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
    backgroundColor: '#999966',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
  refresh:
  {
    height: 35,
    width: 35,
    justifyContent: 'flex-end',
  },
  button:
  {
    borderRadius: 4,
    padding: 10,
    marginTop: 20,
  },
  weeklyForecast:
  {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  weeklyForecastText:
  {
    color: 'white',
    fontSize: 20,
  }

});

const latitude = 27.6704163;
const longitude = 85.3239504;

const HomeScreen = ({ navigation }) => {
  const [weatherResponse, setWeatherResponse] = useState([]);
  const [currentWeather, setCurrentWeather] = useState();
  const [isFetching, setIsFetching] = useState();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    async function getWeather() {
      try {
        setIsFetching(true);
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=metric&appid=bfb0f059129cba17a682d20328838e3f`
        );
        setIsFetching(false);
        setWeatherResponse(data?.daily);
        setCurrentWeather(data?.current);
      } catch (e) {
        // console.warn(e);
      }
    }

    getWeather();
  }, []);
  const handlePress = () => navigation.navigate('Details', { weatherResponse });
  const onRefresh = async () => {
    try {
      setIsFetching(true);
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=metric&appid=bfb0f059129cba17a682d20328838e3f`
      );
      setIsFetching(false);
      setWeatherResponse(data?.daily);
      setCurrentWeather(data?.current);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <View style={styles.flexRoot}>
      <View style={styles.container}>
        <LinearGradient
          colors={['#2d5986', 'transparent']}
          style={styles.background}
        />
        {isFetching ? (
          <ActivityIndicator />
        ) : (
          <View style={[styles.flexRoot, { paddingBottom: insets.bottom }]}>
            <View style={styles.weeklyForecast}>
              <TouchableOpacity
                style={styles.button}
                onPress={onRefresh}
              >
                <Image style={styles.refresh} source={whiteRefresh} />
              </TouchableOpacity>
            </View>

            <Heading currentWeather={currentWeather} />
            <Temperature currentWeather={currentWeather} />
            <TouchableOpacity
              style={styles.button}
              onPress={handlePress}
            >
              <View style={styles.weeklyForecast}>
                <Text style={styles.weeklyForecastText}> Weekly Forecast</Text>
                <Image style={styles.refresh} source={whiteArrow} />
              </View>
            </TouchableOpacity>

          </View>
        /* </View> */

        )}
      </View>
    </View>
  );
};

export default HomeScreen;
