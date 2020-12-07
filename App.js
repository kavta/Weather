import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

import HomeScreen from "./src/screens/home/HomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "yellow", flex: 3, margin: 10, padding: 10 }}
      >
        <View style={{ backgroundColor: "teal", width: 100, height: 100 }} />
      </View>

      <View style={{ backgroundColor: "green", flex: 1 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
