import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/screens/home/HomeScreen';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1A4066',
  },
  todays: {
    color: 'white',
    fontSize: 18,
  },
});

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Kathmandu = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const Home = ({ navigation }) => {
  // State to maintain current temperature
  const [temperature, setTemperature] = useState(31);

  useEffect(() => {
    return () => console.warn('A');
  }, []);

  useEffect(() => {
    if (temperature === 28) {
      console.warn('Mild');
    }
  }, [temperature]);

  // Method to update temperature from HomeScreen
  const handleUpdatePress = () => setTemperature(28);

  // Method to navigate to DetailScreen
  const handlePress = () => navigation.navigate('Details');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <HomeScreen
          temperature={temperature}
          onUpdatePress={handleUpdatePress}
        />

        <View>
          <Text
            onPress={handlePress}
            style={{ textAlign: 'center', color: 'white' }}
          >
            View Details
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const DetailScreen = ({ navigation }) => {
  // const handleGoback=()=>navigation.goback();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#1A4066', flex: 1 }}>
        <Text style={style.todays}>Today's Weather of Kathmandu</Text>
      </View>
    </SafeAreaView>
  );
};

const Pokhara = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home1" component={Home1} />
      <Stack.Screen name="Details1" component={DetailScreen1} />
    </Stack.Navigator>
  );
};

const Home1 = ({ navigation }) => {
  const handlePress = () => navigation.navigate('Details1');

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <HomeScreen />

        <View>
          <Text
            onPress={handlePress}
            style={{ textAlign: 'center', color: 'white' }}
          >
            View Details
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const DetailScreen1 = ({ navigation }) => {
  // const handleGoback=()=>navigation.goback();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#4d6653', flex: 1 }}>
        <Text style={style.todays}>Today's Weather of pokhara</Text>
      </View>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Kathmandu">
        <Drawer.Screen name="Kathmandu" component={Kathmandu} />
        <Drawer.Screen name="Pokhara" component={Pokhara} />
        <Drawer.Screen name="Butwal" component={Pokhara} />
        <Drawer.Screen name="Chitwan" component={Pokhara} />
        <Drawer.Screen name="Illam" component={Pokhara} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
