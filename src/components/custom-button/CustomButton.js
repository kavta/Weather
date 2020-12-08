import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CustomButton() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>

      <TouchableOpacity
        onPress={() => alert("Hello, world!")}
        style={{ backgroundColor: "blue" }}
      >
        <Text style={{ fontSize: 20, color: "#fff" }}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
});