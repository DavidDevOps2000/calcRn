import React, {Component} from 'react';
import {View} from 'react-native';
import Comando from './sourceComp/Comando';
import Entrada from './sourceComp/Entrada';
import Operacao from './sourceComp/Operacao';

const Painel = props => (
  <View>
    <Entrada
      num1={props.num1}
      num2={props.num2}
      atualizaValor={props.atualizaValor}
    />
    <Operacao
      operacao={props.operacao}
      atualizaValorOperacao={props.atualizaOperacao}
    />
    <Comando acao={props.calcular} />
  </View>
);

export {Painel}; /*Tem que usar assim para que se use o index.js para emportar, e nao usar export default */
