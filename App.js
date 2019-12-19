import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './Counter.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Counter time={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },

});
