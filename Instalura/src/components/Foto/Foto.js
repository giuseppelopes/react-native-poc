import React, {Fragment, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import { curtirFoto, imgLike } from '../../api/curtidas';
import estilo from './estilo';

const Foto = ({urlFoto, descricao, qntLikes}) => {
  const [curtiu, setCurtiu] = useState(false);
  const [likes, setLikes] = useState(qntLikes);

  const clicouCurtir = () => {
    const [novoEstadoCurtiu, qnt] = curtirFoto(curtiu, likes)
    setLikes(qnt);
    setCurtiu(novoEstadoCurtiu);
  };

  return (
    <Fragment>
      <Image source={{uri: urlFoto}} style={estilo.imagem} />
      <Text>{descricao}</Text>
      <View style={estilo.viewLike}>
        <TouchableOpacity onPress={clicouCurtir}>
          <Image source={imgLike(curtiu)} style={estilo.like} />
        </TouchableOpacity>
        <Text>curtidsa {likes}</Text>
      </View>
    </Fragment>
  );
};



export default Foto;
