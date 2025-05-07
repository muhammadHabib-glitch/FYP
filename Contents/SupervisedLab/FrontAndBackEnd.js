import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import {Button, RadioButton, Text} from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';

const TestCode = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ResData, setData] = useState([]);
  const pickImage = () => {
    ImagePicker.launchCamera({mediaType: 'photo'}, resp => {
      setSelectedImage(resp.assets[0].uri);
    });
  };
  const showAllData = ({item}) => {
    return (
      <View>
        <Text>{item.id}</Text>
        <Text>{item.firstName}</Text>
      </View>
    );
  };
  const showAll = async () => {
    try {
      let res = await fetch(
        'http://192.168.1.13/contproject/api/contact/showall',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (res.ok) {
        var text = await res.json();
        //console.log(text);

        for (let i = 0; i < text.length; i++) {
          let temp = {};
          temp['id'] = text[i].id;
          temp['firstName'] = text[i].firstName;
          temp['lastName'] = text[i].lastName;
          temp['phoneNumber'] = text[i].phoneNumber;
          temp['DOB'] = text[i].DOB;
          temp['ImageInfo'] = text[i].ImageInfo;
          temp['email'] = text[i].email;
          temp['phoneNumber2'] = text[i].phoneNumber2;
          temp['gender'] = text[i].gender;
          setData([...ResData, temp]);
        }
        console.log('Data = ' + ResData);
      }
    } catch (e) {
      console.log('Error: ' + e.message);
    }
  };
  return (
    <View>
      <ScrollView>
        <View style={{flexDirection: 'row', margin: 20}}>
          <Button mode="elevated">Add</Button>

          <Button mode="elevated">Get by e-mail</Button>
          <Button mode="elevated">Update by e-mail</Button>
        </View>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Button mode="elevated">Delete</Button>
          <Button mode="elevated" onPress={showAll}>
            Show All
          </Button>
        </View>
        <View style={{margin: 100}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#007bff',
              padding: 15,
              borderRadius: 10,
              alignItems: 'center',
              marginBottom: 20,
            }}
            onPress={pickImage}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
              Upload Image
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <TextInput placeholder="Email">Email</TextInput>
            <TextInput placeholder="Email">Name</TextInput>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput placeholder="Email">PhoneNo1</TextInput>
            <TextInput placeholder="Email">PhoneNo2</TextInput>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput placeholder="Email">City</TextInput>
            <View style={{flexDirection: 'row'}}>
              <RadioButton></RadioButton>
              <Text>Male</Text>
              <RadioButton></RadioButton>
              <Text>Female</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <FlatList data={ResData} renderItem={showAllData}></FlatList>
    </View>
  );
};
export default TestCode;
