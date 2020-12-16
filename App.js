/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import HomeScreen from './src/screens/home/HomeScreen';
import Temperature from './src/Components/Fortext/Temperature';
import Details from './src/screens/detail/Details';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
const Stack = createStackNavigator();
const Home = ({ navigation }) => {

  const [WeatherResponse, setWeatherResponse] = useState();
  const [IsFetching, setIsFetching] = useState();
  useEffect(() => {
    async function getWeather() {
      try {
        setIsFetching(true);
        const { data } = await axios.get(
          // 'http://api.weatherstack.com/current?access_key=dbc0fe055e2146e16397ccbc5da6c24d&query=kathmandu'
          'https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=bfb0f059129cba17a682d20328838e3f&units=metric'
        );
        setIsFetching(false);
        setWeatherResponse(data);
      } catch (e) {
        console.warn(e);
      }

    }
    getWeather();
  }, []);
  const handlePress = () => navigation.navigate('Details');
  // console.log({ WeatherResponse });
  return (
    // eslint-disable-next-line react-na tive/no-inline-styles
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={style.background}
        />
        <HomeScreen weatherrespond={WeatherResponse} />
        <Temperature weatherrespond={WeatherResponse} isfetching={IsFetching} />

        {/* // temperature={temperature}
          // onUpdatePress={handleUpdatePress} */}
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
            <Text
              style={{ textAlign: 'center', color: 'white' }}
            >
              Weekly forecast
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const DetailScreen = () => {
  // const handleGoback=()=>navigation.goback();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Details />
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
