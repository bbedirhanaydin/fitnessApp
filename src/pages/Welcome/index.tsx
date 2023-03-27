import React from 'react';
import {SafeAreaView, Text, StyleSheet, Pressable} from 'react-native';
import Button from '../../components/Button';

function Welcome(props: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Aydın Spor Salonu</Text>
      <Button
        text={'Üye Kaydı Oluştur'}
        onPress={() => props.navigation.navigate('MemberSignScreen')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
});

export default Welcome;
