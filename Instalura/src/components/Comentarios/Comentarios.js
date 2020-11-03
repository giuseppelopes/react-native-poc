import React, {Fragment, useState} from 'react';
import {
  FlatList,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import estilo from './estilo';

const Comentarios = ({comentarios}) => {
  const [estadoComentarios, setComentarios] = useState(comentarios);

  const adicionarComentario = () => {
    console.warn(conteudoCampoInput);
    campoInput.clear();

    const novoComentario = {
      date: Date.now(),
      text: conteudoCampoInput,
      userName: "Giuseppe"
    }

    setComentarios([...estadoComentarios, novoComentario]);
  }

  let campoInput;
  let conteudoCampoInput = '';

  return (
    <Fragment>
      <FlatList
        data={estadoComentarios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => 
        <View style={estilo.inline}>
          <Text>{item.userName}: </Text>
          <Text>{item.text}</Text>
        </View>
        }
      />
      <View style={estilo.inline}>
        <TextInput
          ref={(textInput) => (campoInput = textInput)}
          onChangeText={(texto) => (conteudoCampoInput = texto)}
          style={estilo.inputComment}
          placeholder={'Deixe seu comentário'}
        />
        <TouchableOpacity onPress={adicionarComentario}>
          <Image
            style={estilo.imgSend}
            source={require('../../../res/img/send.png')}
          />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default Comentarios;
