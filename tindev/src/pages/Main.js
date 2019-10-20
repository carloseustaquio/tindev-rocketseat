import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Main() {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Aboard!</Text>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  text: {
    color: '#DF4723',
    fontWeight: 'bold',
    fontSize: 20,
  },
})
