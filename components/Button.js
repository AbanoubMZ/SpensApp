import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{ children }</Text>
    </TouchableOpacity>
  )
}
//004E96
const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 20,
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#004E96',
    marginHorizontal:30

  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  }
});

export { Button };