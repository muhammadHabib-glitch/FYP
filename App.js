import React from 'react';

// import ProjectNavigation from './Contents/Project/Login';
import {View} from 'react-native';
import ProjectNavigation from './Contents/MyProject/CALoginScreen';
import LoginScreen from './Contents/Chatbot/LoginScreen';

const App = () => {
  global.MyIpAddress = 'http://192.168.18.96:5000';
  return <ProjectNavigation />;
};
export default App;
