import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import HomeScreen from "./src/screens/home/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const Home = ({ navigation }) => {
  const handlePress = () => navigation.navigate("Details");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <HomeScreen />
        <View>
          <Text
            onPress={handlePress}
            style={{ textAlign: "center", color: "white" }}
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
      <View style={{ backgroundColor: "#1A4066",flex:1}}>
        <Text style={style.todays}>Today's Weather</Text>
        {/* <Text onPress={handleGoback}>Go Back</Text> */}
      </View>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#1A4066",
  },
  todays:
  {
    color:"white",
    fontSize:18
  }
});
