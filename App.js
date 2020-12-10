/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeScreen from './src/screens/home/HomeScreen';
import Details from './src/screens/detail/Details';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1A4066',
    padding: 20,
  },
});

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  // State to maintain current temperature
  const [temperature, setTemperature] = useState(31);

  // useEffect(() => {
  //   return () => console.warn('A');
  // }, []);

  // useEffect(() => {
  //   if (temperature === 28) {
  //     console.warn('Mild');
  //   }
  // }, [temperature]);

  // Method to update temperature from HomeScreen
  const handleUpdatePress = () => setTemperature(28);

  // Method to navigate to DetailScreen
  const handlePress = () => navigation.navigate('Details');

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <HomeScreen
          temperature={temperature}
          onUpdatePress={handleUpdatePress}
        />

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
              View Details
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
