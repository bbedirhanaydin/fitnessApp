import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

function MemberResult(props: any) {
  console.log(props.route);

  const info = props.route.params.user;

  return (
    <SafeAreaView>
      <Text style={styles.label}>Üye adı: {info.name} </Text>
      <Text style={styles.label}>Üye Soyadı {info.surname} :</Text>
      <Text style={styles.label}>Üye Yaşı: {info.age} </Text>
      <Text style={styles.label}>Üye E-posta: {info.mail} </Text>
      <View style={styles.viewMessage}>
        <Text style={styles.message}>Kayıt Tamamlandı!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
  },
  message: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  viewMessage: {
    backgroundColor: '#00A2F0',
    margin: 50,
    borderRadius: 5,
  },
});

export default MemberResult;
