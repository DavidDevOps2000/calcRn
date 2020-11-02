import React from 'react';
import {View} from 'react-native';
import Numero from './campos/Numero';

export default props => (
  <View style={estilo.numeros}>
    <Numero num={props.num1} atualizaValor={props.atualizaValor} nome='num1' />
    <Numero num={props.num2} atualizaValor={props.atualizaValor} nome='num2' />
  </View>
);

const estilo = {
  numeros: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};
