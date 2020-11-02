import React from 'react';
import {TextInput} from 'react-native';

export default (props) => (
  <TextInput
    style={estilo.numero}
    value={props.num}
    onChangeText={(valorDoCampo) =>
      props.atualizaValor(props.nome, valorDoCampo)
    }
  />
);

const estilo = {
  numero: {
    width: 140,
    height: 80,
    fontSize: 20,
  },
};
