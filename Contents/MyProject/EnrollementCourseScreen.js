import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const Enrollment = () => {
  const [EnrollCourses, setEnrollement] = useState([]);

  useEffect(() => {
    GetEnrollements();
  }, []);

  const GetEnrollements = async () => {
    try {
      const response = await fetch(
        `${global.MyIpAddress}/ShowAllCoursesDetail?reg_no=2021-ARID-4513&semester_no=2024SM`,
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      console.log(data);

      setEnrollement(data.data);
    } catch (error) {
      'Error: ' + error.message;
    }
  };
  const renderItem = ({item}) => (
    <View style={{padding: 10, borderBottomWidth: 1, borderColor: '#ccc'}}>
      <Text style={{color: 'black'}}>Course No: {item.Course_no}</Text>
      <Text>Course Name: {item.Course_name}</Text>
    </View>
  );

  return (
    <View style={{flex: 1, margin: 10}}>
      <Text
        style={{
          margin: 20,
          textAlign: 'center',
          justifyContent: 'center',
          color: '#1E897A',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Your Enroll Courses are ...
      </Text>
      <View>
        <FlatList
          data={EnrollCourses}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}></FlatList>
      </View>

      <View>
        <Text
          style={{
            margin: 30,
            textAlign: 'center',
            justifyContent: 'center',
            color: '#1E897A',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Fail Course Recommendation
        </Text>
      </View>
    </View>
  );
};
export default Enrollment;
