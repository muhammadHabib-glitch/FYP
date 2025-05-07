import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const Enrollement = () => {
  const [courses, setCourses] = useState([]);
  const [failedCourses, setFailedCourses] = useState([]);
  const [error, setError] = useState(null);

  const fetchEnrollCourses = async () => {
    try {
      const response = await fetch(
        `${global.MyIpAddress}/ShowAllCoursesDetail?reg_no=2021-ARID-4513&semester_no=2024SM`,
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      console.log(data);

      setCourses(data.data);

      const failedResponse = await fetch(
        `${global.MyIpAddress}/ShowFailCoursesByReg?reg_no=2021-ARID-4513`,
      );

      if (!failedResponse.ok) {
        throw new Error('Failed to fetch failed courses');
      }
      const failedData = await failedResponse.json();
      setFailedCourses(failedData.data);
    } catch (error) {
      setError('Error: ' + error.message);
    }
  };

  useEffect(() => {
    fetchEnrollCourses();
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Courses</Text>
      <FlatList
        data={courses}
        renderItem={({item}) => (
          <View style={styles.courseItem}>
            <Text style={styles.courseText}>Course: {item.Course_no}</Text>
            {/* <Text style={styles.courseText}>Grade: {item.grade}</Text>
            <Text style={styles.courseText}>Attempt no: {item.attempt_no}</Text>
            <Text style={styles.courseText}>Discipline: {item.discipline}</Text>
            <Text style={styles.courseText}>Section: {item.section}</Text>
            <Text style={styles.courseText}>Semester: {item.semester_no}</Text> */}
          </View>
        )}
        keyExtractor={item1 => item1.course_no}
      />

      <Text style={styles.title}>Failed Courses</Text>
      <FlatList
        data={failedCourses}
        renderItem={({item}) => (
          <View style={styles.courseItem}>
            <Text style={styles.courseText}>Course: {item.Course_no}</Text>
            {/* <Text style={styles.courseText}>Grade: {item.grade}</Text>
            <Text style={styles.courseText}>Attempt no: {item.attempt_no}</Text>
            <Text style={styles.courseText}>Discipline: {item.discipline}</Text>
            <Text style={styles.courseText}>Section: {item.section}</Text>
            <Text style={styles.courseText}>Semester: {item.semester_no}</Text> */}
          </View>
        )}
        keyExtractor={item2 => item2.course_no}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  courseItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  courseText: {
    fontSize: 16,
    color: '#000000',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});

export default Enrollement;
