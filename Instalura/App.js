import React, {Fragment} from 'react';
import {Text, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Giuseppe Lopes</Text>
      <Image source={require("./res/img/alura.jpg")} />
      <Text>Ana Braun Lopes</Text>
      <Image source={require("./res/img/alura.jpg")} />
    </ScrollView>
  );
};

export default App;
