import React from 'react';
import {View, TextInput} from 'react-native';

export default props => (
    <View>
        <TextInput style={estilos.visor}
            placeholder='Resultado'/>
    </View>
)

const estilos = {
        visor:{
            height:100,
            fontSize:30
        }
}