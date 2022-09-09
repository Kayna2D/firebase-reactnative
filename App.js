import firebase from './src/firebaseConnection';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function App() {

  const [nome, setNome] = useState();

  useEffect(()=> {
    async function buscarDados(){
      await firebase.database().ref('Alunos/1/Nome').on('value', (snapshot) => {
        setNome(snapshot.val());
      })
    }

    buscarDados();
  }, [])

  return (
    <View style={styles.container}>
      <Text>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});