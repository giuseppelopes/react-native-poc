import React, { Fragment } from 'react';
import {
  Image,
  Text,
  View
} from "react-native";

import style from "./style"

const Cabecalho = ({nomeUsuario, urlImage}) =>{
  return (
    <View style={style.cabecalho}>
      <Image 
        source={{uri: urlImage}}
        style={style.fotoUsuario}

      />
      <Text>{nomeUsuario}</Text>
    </View>
    
  );
}

export default Cabecalho;