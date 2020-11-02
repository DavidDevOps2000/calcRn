/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput} from 'react-native';

export default (props) => (
  <View>
    <TextInput
      style={estilos.visor}
      placeholder='Resultado'
      editable={false}
      value={props.resultado}
    />
  </View>
);

const estilos = {
  visor: {
    height: 100,
    fontSize: 30,
  },
};

/*-------------------------------------------------------------------------- EXPLICAÇÃO SOBRE STATE e componente controlado e nao---------------------
export default class Visor extends Component {

constructor(props){
    super(props);

    this.state = { resultado:''} //state só deve ser usando acompanhado com o Component, para renderizar valores defaults de aplicações
    }
    render(){//esse vai renderizar os valores default do state, mas que podem ser usados futuramente.
        return(
            <View>
                <TextInput style={estilos.visor} placeholder='Resultado' value={this.state.resultado} />
            </View>
        )
    }
}

const estilos = {
        visor:{
            height:100,
            fontSize:30
        }

---------------------------------------------------------------------------------*/
