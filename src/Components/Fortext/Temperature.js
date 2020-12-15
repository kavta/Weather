import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
// import cloudy from '../../../assets/cloudyicon.png';

const style = StyleSheet.create(

  {
    weather:
    {
      fontSize: 38,
      color: 'white',
      textAlign: 'left',
    },
    verticalLines:
    {
      height: 60,
      width: 8,
      backgroundColor: 'black',
      // justifyContent: 'space-around'

    }
  }
);
const Temperature = ({ weatherrespond, isfetching }) => {
  // console.log(icon);
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flexDirection: 'row' }}>
      {isfetching ? (<ActivityIndicator size="large" />) : (
        <>
          <Text style={style.weather}>

            {weatherrespond?.main?.temp}&deg;C
          </Text>
          <View style={style.verticalLines} />
          <Text style={style.weather}>
            {weatherrespond?.weather[0]?.description}

            {/* {weatherrespond?.weather?.description} */}
            {/* sunrise:{ Sunrise(weatherrespond?.sys?.sunrise)} */}
            {/* sunset:{Sunset(weatherrespond?.sys?.sunset)} */}
            {/* {WeatherResponse?.weather?.icon} */}
          </Text>
        </>
      ) }
      {/* <Text style={style.tex}>{`${temperature}`}&deg;C</Text> */}
    </View>
  );
};

export default Temperature;

// const style = StyleSheet.create({
//   tex: {
//     textAlign: 'center',
//     fontSize: 22,
//     color: 'white',
//     fontStyle: 'italic',
//   },
// });
