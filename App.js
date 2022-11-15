import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button } from 'react-native';

export default function App() {
 
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://dg5bfdg0bta6r.cloudfront.net/produtos/16168/7898578203441Amp.jpg',
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>
        Cadastro de Cliente
      </Text>
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder="Nome"
      />
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder="Sobrenome"
      />
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder="Email"
      />
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button
          title="Cadastrar"
        />
        <Button
          title="Cancelar"
          color="#841584"
        />
      </View>
      <Text>
        Cadastro de Viagem
      </Text>
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder="Destino"
      />
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder="Partida"
      />
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder="Transporte"
      />
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder="Valor"
      />
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button
          title="Cadastrar"
        />
        <Button
          title="Cancelar"
          color="#841584"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    alignItems: 'center',
    justifyContent: 'center',
  },
});
