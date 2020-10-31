import React from 'react'
import {Text, Picker, View} from 'react-native';

//Picker é semelhante um selectBox do HTML. 
export default props => (
    <Picker style={estilo.operacao}>
        <Picker.Item label='Soma' value='soma' />
        <Picker.Item label='Subtração' value='subtracao' />
    </Picker>
);

const estilo = {
    operacao:{
        marginTop:15,
        marginBottom:15
    }
}