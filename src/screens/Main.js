// src/screens/MainScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>메인 화면</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
  },
});

export default MainScreen;
