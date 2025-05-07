import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Button} from 'react-native';

const SharedPrefScreen = () => {
  const saveManyStudents = async () => {
    try {
      const Students = [
        {name: 'Habib', city: 'Rawalpindi', gender: 'M'},
        {name: 'Danish', city: 'Islamabad', gender: 'M'},
        {name: 'Ahsan', city: 'Rawalpindi', gender: 'M'},
      ];
      await AsyncStorage.setItem('students', JSON.stringify(Students));
      console.log(Students[1].name + ' ' + Students[0].name);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getStudents = async () => {
    try {
      var resStudents = await AsyncStorage.getItem('students');
      if (resStudents) {
        console.log('Student name', resStudents[1].name, '');
      }
    } catch (error) {
      console.log('Error ae rha ', error.message);
    }
  };

  const saveName = async () => {
    try {
      await AsyncStorage.setItem('st_name', 'Muhammad Habib');
    } catch (error) {
      console.log(error.message);
    }
  };
  const getName = async () => {
    try {
      var data = await AsyncStorage.getItem('st_name');
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const saveStudent = async () => {
    try {
      var myStudent = {name: 'Habib', city: 'Rawalpindi', gender: 'M'};
      await AsyncStorage.setItem('student', JSON.stringify(myStudent));
      console.log('Student Saved ' + myStudent.name);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getStudent = async () => {
    try {
      var response = await AsyncStorage.getItem('student');
      if (response) {
        var student = JSON.parse(response);
        console.log('Student Name :' + student.name, student.city);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <View style={{justifyContent: 'center', alignContent: 'center'}}>
      <Button
        style={{margin: 10}}
        title="Save Name"
        onPress={saveName}></Button>
      <Button
        style={{margin: 10}}
        title="Save Student"
        onPress={saveStudent}></Button>
      <Button
        style={{margin: 10}}
        title="Save all Students"
        onPress={saveManyStudents}></Button>
      <Button style={{margin: 10}} title="Get Name" onPress={getName}></Button>
      <Button
        style={{margin: 10}}
        title="Get Student"
        onPress={getStudent}></Button>

      <Button
        style={{margin: 10}}
        title="Get All Student"
        onPress={getStudents}></Button>
    </View>
  );
};
export default SharedPrefScreen;
