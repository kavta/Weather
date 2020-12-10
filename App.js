/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable space-infix-ops */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/screens/home/HomeScreen';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1A4066',
    padding: 20
  },
  todays: {
    color: 'white',
    fontSize: 18,
  },
});

const Stack = createStackNavigator();
const Drawer=createDrawerNavigator();
const Kathmandu=() => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* <Button title="setting" onPress={settingPress} /> */}
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>

  );

};
const Home = ({ navigation }) => {
  const handlePress = () => navigation.navigate('Details');
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
const Pokhara=() => {
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
