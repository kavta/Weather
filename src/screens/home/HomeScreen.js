/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Heading from '../../Components/Fortext/Heading';
// import cloudy from '../../../assets/cloudyicon.png';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#1A4066',
    paddingTop: 20
  },
  picture:
  {
    height: 350,
    width: 300
  }
});

const HomeScreen = ({ weatherrespond }) => {
  const icon = weatherrespond?.weather[0]?.icon;
  return (
    <SafeAreaView style={style.container}>
      <Heading />

      <View>
        <Image style={style.picture} source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }} />
        {/* <Image style={style.picture} source={cloudy} /> */}
        {/* <Image style={style.picture} source={{ uri: 'https://api.openweathermap.org/data/2.5/forecast?q=kathmandu&appid=bfb0f059129cba17a682d20328838e3f' }} /> */}
      </View>

      {/* <TouchableOpacity
        style={{
          borderWidth: 1,
          borderRadius: 4,
          padding: 10,
          borderColor: 'white',
          marginTop: 20,
        }}
        onPress={onUpdatePress}
      >
        <Text style={{ color: 'white', fontSize: 20 }}>Update</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
