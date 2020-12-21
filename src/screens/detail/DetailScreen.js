import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
// import { DataTable } from 'react-native-paper';
import moment from 'moment';

const styles = StyleSheet.create({
  root: {
    flex: 3,
    flexDirection: 'column',
    padding: 20,
    backgroundColor: '#336699',
    paddingTop: 80,
  },
  combine:
  { flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#2d5986'
  },
  details:
  {
    fontSize: 20,
    color: 'white',
  },
  weatherIcon: {
    height: 50,
    width: 50,
  },
  weather:
  {
    color: 'white',
    fontSize: 25,
    paddingBottom: 30,
    textAlign: 'center'
  },
  description:
  {
    fontSize: 13,
    color: 'white'
  },
  horizontal: {
    height: 2,
    width: 500,
    backgroundColor: 'gray',
    opacity: 0.2
  },
});

const DetailScreen = ({ route }) => {
  // console.log(route.params?.weatherResponse);
  const handleRenderItem = ({ item }) => {
    const icon = item?.weather[0]?.icon;
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View>
        <View style={styles.combine}>

          <Image style={styles.weatherIcon} source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }} />

          <View>
            <Text style={styles.details}>
              {moment.unix(item?.dt).format('dddd')}{'\n'}
              <Text style={styles.description}> {item?.weather[0]?.description}</Text>
            </Text>
          </View>

          <Text style={styles.details}> {item?.temp?.day.toFixed()}&deg;C </Text>
        </View>
        <View style={styles.horizontal} />
      </View>
    );
  };

  return (
    <View style={styles.root}>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{ display: 'flex' }}>
        <Text style={styles.weather}>Weather in Kathmandu.</Text>
      </View>
      <FlatList
        data={route.params?.weatherResponse.slice(1)}
        renderItem={handleRenderItem}
        keyExtractor={(item) => item?.dt.toString()}
      />
    </View>

  );
};

export default DetailScreen;
