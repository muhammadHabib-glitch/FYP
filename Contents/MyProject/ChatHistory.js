import React from 'react';
import {Text, View} from 'react-native';

const ChatHistory = () => {
  return (
    <View>
      <Text
        style={{
          margin: '80',
          textAlign: 'center',
          justifyContent: 'center',
          color: '#1E897A',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Chat History
      </Text>
      <Text
        style={{
          margin: '80',
          textAlign: 'center',
          justifyContent: 'center',
          color: 'black',
          fontSize: 20,
          padding: 20,
        }}>
        Your ChatHistory
      </Text>
    </View>
  );
};
export default ChatHistory;
