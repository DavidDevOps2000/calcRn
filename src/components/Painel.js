import React from 'react';
import {View, Text} from 'react-native';
import Comando from './sourceComp/Comando';
import Entrada from './sourceComp/Entrada';
import Operacao from './sourceComp/Operacao';

export default props => (
<View>
    <Entrada/>
    <Operacao/>
    <Comando/>
</View>
)