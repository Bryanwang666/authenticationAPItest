import React from 'react';
import { StyleSheet, Text,View } from 'react-native';
import Navigation from './src/Navigation';
export default function App() {
  return (
    <View style={styles.root}>
      <Navigation />
    </View>
  );
} 

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
