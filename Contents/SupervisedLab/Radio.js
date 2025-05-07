import React, {useState} from 'react';

import {View, TextInput, StyleSheet, Text, ScrollView} from 'react-native';
import {RadioButton, Checkbox} from 'react-native-paper';
const Radio = () => {
  const [name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPass] = useState('');
  const [gender, Setgender] = useState();
  const [graguate, Setgraguated] = useState();
  const [Married, setMarried] = useState();
  const data = [];
  return (
    <View style={{padding: 10, backgroundColor: 'aqua', height: '100%'}}>
      <ScrollView>
        <Text style={{fontSize: 40, textAlign: 'center', margin: 40}}>
          LoginForm
        </Text>
        <TextInput
          style={ss.TextInput}
          placeholder="Name"
          onPress={setUserName}></TextInput>
        <TextInput
          style={ss.TextInput}
          onPress={setEmail}
          placeholder="Email"></TextInput>
        <TextInput
          style={ss.TextInput}
          OnPress={setPassword}
          placeholder="Password"></TextInput>
        <TextInput
          style={ss.TextInput}
          OnPress={setConfirmPass}
          placeholder="Confirm Password"></TextInput>

        <View style={{flexDirection: 'row', padding: 20}}>
          <RadioButton
            status={gender === 'male' ? 'checked' : 'unchecked'}
            onPress={() => Setgender('male')}></RadioButton>

          <Text style={{fontSize: 30}}>Male</Text>
          <RadioButton
            status={gender == 'female' ? 'checked' : 'unchecked'}
            onPress={() => {
              Setgender('female');
            }}></RadioButton>
          <Text style={{fontSize: 30}}>Female</Text>
        </View>

        <View style={{flexDirection: 'row', padding: 20}}>
          <RadioButton
            status={graguate ? 'checked' : 'unchecked'}
            onPress={() => Setgraguated('Graduate')}></RadioButton>

          <Text style={{fontSize: 30}}>Graguate</Text>
          <RadioButton
            status={graguate == 'Ungraduate' ? 'checked' : 'unchecked'}
            onPress={() => {
              Setgraguated('Ungraduate');
            }}></RadioButton>
          <Text style={{fontSize: 30}}>Ungraduate</Text>
        </View>
        <View style={{flexDirection: 'row', borderWidth: 0}}>
          <Checkbox
            status={Married === 'Married' ? 'checked' : 'unchecked'}
            onPress={() => setMarried('Married')}></Checkbox>
          <Text style={{fontSize: 30}}>Married </Text>

          <Checkbox
            status={Married === 'UnMarried' ? 'checked' : 'unchecked'}
            onPress={() => setMarried('UnMarried')}></Checkbox>
          <Text style={{fontSize: 30}}>UnMarried</Text>
        </View>
        <View style={{flexDirection: 'row'}}></View>
        <View></View>
      </ScrollView>
    </View>
  );
};
const ss = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize: 25,
    margin: 5,
  },
});
export default Radio;
