import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Temperature() {
  return (
    <View>
      <Text style={style.tex}>31&deg;C</Text>
    </View>
  );
}
const style = StyleSheet.create({
  tex: {
    textAlign: "center",
    fontSize: 22,
    color: "white",
    fontStyle: "italic",
  },
});
