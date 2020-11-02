import React, {Component} from 'react';
import {View} from 'react-native';
import {Painel, Resultado, Topo} from './components';
/*import Resultado from './src/components/Resultado';
import Painel from './src/components/Painel';*/

export default class App extends Component {
  constructor(props) {
    /* Aqui será renderizado primeiro como no ciclo de vida em app */
    super(props);

    this.state = {
      num1: '',
      num2: '',
      operacao: 'soma',
      resultado: ''}; /*Aqui vai ser os valores padroes a serem carregadores */

    this.calcular = this.calcular.bind(this); /* manteremos o contexto da função para que ela pegue os valore aqui em nao outros componentes*/
    this.atualizaOperacao = this.atualizaOperacao.bind(this); /* E o uso do this para usaa mesma funcao e var para outros contextos aqui */
    this.atualizaValor = this.atualizaValor.bind(this);
  }

  calcular() {
    let resultado = 0;

    switch (this.state.operacao){/*Pegamos o valor dentro do atual Pincker onde o valor esta selecionado  */
        case 'soma':
              resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2); /* aqui pegamos os valore e convertemos para float */
        break;

      case 'subtracao':
        resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2); /*aqui a mesmo coisa */
        break;

      default:
        resultado = 0;
    }

    this.setState({ resultado: resultado.toString()}); /* temos que pega a var resultado e converte-la ara string */
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
          calcular={this.calcular}
          atualizaOperacao={this.atualizaOperacao}
          atualizaValor={this.atualizaValor}
        />
      </View>
    );
  }
}
