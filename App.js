import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImcCalcul from './InputImc/ImcCalcul';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Calculer votre IMC</Text>
      <ImcCalcul></ImcCalcul>
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
