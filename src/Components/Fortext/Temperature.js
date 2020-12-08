import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default function Temperature()
{
return(
    <View >
<Text  style={style.tex}>31&deg;C
</Text>
</View>


);

}
const style=StyleSheet.create(
        {
        tex:
            {
                fontSize:22,
                fontStyle:"italic",
                
            }

        }

)

