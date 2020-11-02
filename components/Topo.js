import React from 'react';
import {View, Text} from 'react-native';
import Cabecalho from './Cabecalho';

const Topo = props => (
    <Cabecalho />
);
export {Topo}; /*Tem que usar assim para que se use o index.js para emportar, e nao usar export default */
