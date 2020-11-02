import React, {Component} from 'react';
import {Picker} from 'react-native';

//Picker é semelhante um selectBox do HTML.
export default class Operacao extends Component {
  /*constructor(props) {
    super(props);

    this.state = {operacao: ''};
  }*/
  render() {
    return (
      <Picker
        style={estilo.operacao}
        selectedValue={this.props.operacao}
        onValueChange={op => { this.props.atualizaOperacao(op); }}>
        <Picker.Item label="Soma" value="soma" />
        <Picker.Item label="Subtração" value="subtracao" />
      </Picker>
    );
  }
}

const estilo = {
  operacao: {
    marginTop: 15,
    marginBottom: 15,
  },
};
