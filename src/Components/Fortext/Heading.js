import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

export default function Heading()
{
    return(
        <View >
        <Text style={style.tex}>
            Kathmandu
        </Text>
        </View>
    );

}

const style=StyleSheet.create(
{
tex:
{
fontSize:24
},
}

);