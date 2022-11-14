import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Destino from "./Pages";

export default function App() {
  return (
    <Destino />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});
