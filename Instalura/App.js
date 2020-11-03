import React, {Fragment, useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import lerFotos from './src/api/feed';

import {Cabecalho} from './src/components/Cabecalho';
import {Foto} from './src/components/Foto';
import {Comentarios} from './src/components/Comentarios';

const App = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    lerFotos(setFotos);
  }, []);

  return (
    <FlatList
      data={fotos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <Fragment>
          <Cabecalho nomeUsuario={item.userName} urlImage={item.userURL} />
          <Foto
            urlFoto={item.url}
            descricao={item.description}
            qntLikes={item.likes}
          />
          <Comentarios comentarios={item.comentarios} />
        </Fragment>
      )}
    />
  );
};

export default App;
