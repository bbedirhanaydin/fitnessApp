import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const Button = (props: any) => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}> {props.text} </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00A2F0',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Button;
