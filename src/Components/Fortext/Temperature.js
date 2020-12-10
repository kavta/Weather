import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Temperature = ({ temperature }) => {
  return (
    <View>
      <Text style={style.tex}>{`${temperature}`}&deg;C</Text>
    </View>
  );
};

export default Temperature;

const style = StyleSheet.create({
  tex: {
    textAlign: 'center',
    fontSize: 22,
    color: 'white',
    fontStyle: 'italic',
  },
});
