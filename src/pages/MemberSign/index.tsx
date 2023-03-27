import React, {useState} from 'react';
import {SafeAreaView, View, Text, Alert} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';

function MemberSign(props: any) {
  const [userName, setUserName] = useState(null);
  const [userSurName, setUserSurName] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurName || !userAge || !userMail) {
      Alert.alert('Aydın Spor Salonu', 'Bilgiler boş bırakılamaz!');
      return;
    }

    const user = {
      name: userName,
      surname: userSurName,
      age: userAge,
      mail: userMail,
    };

    props.navigation.navigate('MemberResultScreen', {user});
  }

  return (
    <SafeAreaView>
      <Input
        label={'Üye Adı'}
        placeholder={'Üyenin ismini giriniz...'}
        onChangeText={setUserName}
      />
      <Input
        label={'Üye Soyadı'}
        placeholder={'Üyenin soyismini giriniz...'}
        onChangeText={setUserSurName}
      />
      <Input
        label={'Üye Yaşı'}
        placeholder={'Üyenin yaşını giriniz...'}
        onChangeText={setUserAge}
      />
      <Input
        label={'Üye E-posta'}
        placeholder={'Üyenin e-postasını giriniz...'}
        onChangeText={setUserMail}
      />
      <Button text={'Kaydı Tamamla'} onPress={handleSubmit} />
    </SafeAreaView>
  );
}

export default MemberSign;
