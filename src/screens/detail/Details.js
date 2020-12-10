import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#1A4066',
    flex: 1,
  },
  todays: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },

});

const Details = () => {
  return (
    <View style={style.container}>
      <Text style={style.todays}>Todays Weather of Kathmandu</Text>
    </View>
  );
};
export default Details;
