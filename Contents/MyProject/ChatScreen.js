import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Alert} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconButton} from 'react-native-paper';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FAQ from './FAQ';
import PreviousCourse from './PreviousCourseScreen';
import FailCourse from './FailCourseScreen';
import Enrollment from './EnrollementCourseScreen';
import ChatHistory from './ChatHistory';

const ChatScreen = () => {
  const [userInput, setUserInput] = useState('');
  const [responseText, setResponseText] = useState('');

  const ChatResponse = async () => {
    try {
      const response = await fetch(`${global.MyIpAddress}/get_answer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: userInput,
        }),
      });

      const result = await response.json();
      console.log(result.answer);
      setResponseText(result.answer);
    } catch (error) {
      Alert.alert('Error', error.message || 'Something went wrong');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ChatBot</Text>

      <Text style={styles.response}>{responseText}</Text>
      <View
        style={{position: 'absolute', bottom: 0, width: '100%', margin: 10}}>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="Ask Anything ..."
            placeholderTextColor={'white'}
            value={userInput}
            backgroundColor={'#1E897A'}
            onChangeText={setUserInput}
          />

          <IconButton
            icon="magnify"
            size={30}
            color="white"
            onPress={ChatResponse}
          />
        </View>
      </View>
    </View>
  );
};

const Tab = createBottomTabNavigator();
const LoginTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 25,

          backgroundColor: '#fff',
          borderTopColor: '#ccc',
          borderTopWidth: 0.5,
        },

        inputArea: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 10,
        },
        response: {
          fontSize: 16,
          color: '#333',
          marginBottom: 20,
          backgroundColor: '#f2f2f2',
          padding: 15,
          borderRadius: 10,
        },

        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          color: '#1E897A',
        },
      }}>
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: () => null,
        }}
      />
      <Tab.Screen
        name="FAQ"
        component={FAQ}
        options={{
          tabBarLabel: 'FAQ',
          tabBarIcon: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
    color: '#1E897A',
  },
  response: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    padding: 2,
  },
  input: {
    flex: 1,
    color: 'white',
    backgroundColor: '#1E897A',
    borderRadius: 26,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
const DrawerNavigatoin = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: true}}>
      <Drawer.Screen name="Home" component={LoginTabNavigation} />
      <Drawer.Screen name="Previous Courses" component={PreviousCourse} />
      <Drawer.Screen name="New Enroll Courses" component={Enrollment} />
      <Drawer.Screen name="Failed Courses" component={FailCourse} />
      <Drawer.Screen name="Chat History" component={ChatHistory} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatoin;
