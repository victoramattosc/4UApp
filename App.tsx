import React from 'react';
import { useFonts, Poppins_400Regular, Poppins_400Regular_Italic, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Home from './src/pages/Home';

export default function App() {
  const [fonteCarregada] = useFonts({
    PRegular: Poppins_400Regular,
    PItalic: Poppins_400Regular_Italic,
    PBold: Poppins_700Bold,
  });

  if (!fonteCarregada) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
