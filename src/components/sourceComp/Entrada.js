import React from 'react'
import {Text, View} from 'react-native';
import Numero from './campos/Numero';

export default props => (
    <View style={estilo.numeros}>
        <Numero/>
        <Numero/>
    </View>
);

const estilo = {
    numeros:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
}