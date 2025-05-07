import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native-paper';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChatScreen = () => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      {inputText === '' && (
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome to ChatBot</Text>
        </View>
      )}

      {inputText === '' && (
        <Text style={styles.helpText}>How may I help you?</Text>
      )}

      <View style={styles.searchBox}>
        <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          placeholder="Ask Anything . . ."
          style={styles.input}
          value={inputText}
          onChangeText={text => setInputText(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: 150,
    backgroundColor: 'teal',
    borderBottomRightRadius: 60,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  welcomeText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  helpText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
  },
  searchBox: {
    position: 'absolute',
    bottom: 40,
    left: '10%',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
  },
});

export default ChatScreen;
