import React, {Component} from 'react';
import {View} from 'react-native';
import Topo from './src/components/Topo';
import Resultado from './src/components/Resultado';
import Painel from './src/components/Painel';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {num1: '', num2: '', operacao: 'soma', resultado: ''};

    this.calcular = this.calcular.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
  }

  calcular() {
    let resultado = 0;

    switch (this.state.operacao) {
      case 'soma':
        resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        break;

      case 'subtracao':
        resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
        break;

      default:
        resultado = 0;
    }

    this.setState({resultado: resultado.toString()});
  }

  atualizaOperacao(operacao) {
    this.setState({operacao});
  }

  atualizaValor(nomeCampo, numero) {
    const obj = {};
    obj[nomeCampo] = numero;
    this.setState(obj);
  }

  render() {
    return (
      <View>
        <Topo />
        <Resultado resultado={this.state.resultado} />
        <Painel
          num1={this.state.num1}
          num2={this.state.num2}
          operacao={this.state.operacao}
          calcular={this.state.calcular}
          atualizaOperacao={this.state.atualizaOperacao}
          atualizaValor={this.atualizaValor}
        />
      </View>
    );
  }
}
