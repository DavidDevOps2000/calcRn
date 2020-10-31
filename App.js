import React from 'react';
import Topo from './src/components/Topo';
import Resultado from './src/components/Resultado';
import { View } from 'react-native';
import Painel from './src/components/Painel';

export default props => {
  return(
        <View>
          <Topo/>
          <Resultado/>
          <Painel/>
        </View>);
}


