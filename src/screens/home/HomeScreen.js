import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import axios from 'axios';

import Temperature from '../../Components/Fortext/Temperature';

const styles = StyleSheet.create({
  flexRoot: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1A4066',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
});

const latitude = 27.6704163;
const longitude = 85.3239504;

const HomeScreen = ({ navigation }) => {
  const [weatherResponse, setWeatherResponse] = useState([]);
  const [isFetching, setIsFetching] = useState();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    async function getWeather() {
      try {
        setIsFetching(true);
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=metric&appid=bfb0f059129cba17a682d20328838e3f`
        );
        setIsFetching(false);
        setWeatherResponse(data?.daily);
      } catch (e) {
        console.warn(e);
      }
    }

    getWeather();
  }, []);

  const handlePress = () => navigation.navigate('Details', { weatherResponse });

  return (
    <View style={styles.flexRoot}>
      <View style={styles.container}>
        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={styles.background}
        />

        {isFetching ? (
          <ActivityIndicator />
        ) : (
          <View style={[styles.flexRoot, { paddingBottom: insets.bottom }]}>
            <Temperature weatherrespond={weatherResponse[0]} />

            <View>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 4,
                  padding: 10,
                  borderColor: 'white',
                  marginTop: 20,
                }}
                onPress={handlePress}
              >
                <Text style={{ textAlign: 'center', color: 'white' }}>
                  Weekly Forecast
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
