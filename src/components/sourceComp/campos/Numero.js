import React from 'react'
import {Text, TextInput, View} from 'react-native';

export default props => (
    <TextInput style={estilo.numero}> <Text>10</Text></TextInput>
);

const estilo = {
    numero:{
        width:140,
        height:80,
        fontSize:20
    }
}