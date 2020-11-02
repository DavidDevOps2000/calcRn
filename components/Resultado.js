import React from 'react';
import {View, Text} from 'react-native';
import Visor from './Visor';

const Resultado = (props) =>(
     <Visor resultado={props.resultado} />
);

export {Resultado}; /*Tem que usar assim para que se use o index.js para emportar, e nao usar export default */
