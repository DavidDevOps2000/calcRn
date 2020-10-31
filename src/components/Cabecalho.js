import React from 'react';
import {View, Text} from 'react-native';

export default props => (
    <View style={style.topo}>
        <Text style={style.txtTitulo}>
            Caculadora 1.0
        </Text>
    </View>
)

const style = {
    topo:{
        backgroundColor:'#2196f6',
        padding:10,
        alignItems:'center'
    },
    txtTitulo:{
        fontSize:25,
        color:'#FFF'
    }
    }