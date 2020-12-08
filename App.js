import React from 'react';
import {Image,View,StyleSheet} from 'react-native';
import Heading from './src/Components/Fortext/Heading';
import Temperature from './src/Components/Fortext/Temperature';
import cloudy from './assets/cloudy.png';


export default function App()
{
  // const cloudyday=require("./assets/svg/wi-day-cloudy.svg");
  return(
    
    <View style={style.container}>
      <View style={style.Headingcontainer}>
          <Heading />
      </View>
        <View>
        <Image style={style.pic}
        source={cloudy}
        />
        <Temperature/> 
      </View>
    </View>
    
  );

}
const style=StyleSheet.create(
{
  Headingcontainer:
  {
    height:30

  },
    container:
    {
      flex:1,
      justifyContent:"space-around",
      flexDirection:"column",
      alignItems:"center",
      backgroundColor:"#8aa6d4",
      
    },
    pic:
    {
      
       marginLeft:"auto",
       marginRight:"auto"
       
      // height:115,
      // width:115,
    }

}

);