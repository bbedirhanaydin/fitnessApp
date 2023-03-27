import React from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

function Input(props: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}> {props.label} </Text>
      <View style={styles.input_container}>
        <TextInput
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input_container: {
    borderWidth: 1,
    margin: 5,
    padding: 2,
    borderRadius: 5,
    borderColor: '#bdbdbd',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 3,
  },
});

export default Input;
