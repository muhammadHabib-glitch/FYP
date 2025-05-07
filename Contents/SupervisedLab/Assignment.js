import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RadioButton, Button} from 'react-native-paper';

const Quiz = () => {
  const questionData = [
    {question: '2+2=?', options: [4, 5, 6, 7], correctOption: 4},
    {question: '3*9=?', options: [21, 27, 24, 30], correctOption: 27},
    {question: '2+2+8=?', options: [11, 15, 12, 10], correctOption: 12},
    {question: '45/5=?', options: [8, 6, 7, 9], correctOption: 9},
  ];
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedOption, setSelectedOption] = useState(-1);
  const [correctQuestions, setCorrectQuestions] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState(0);
  const [fadeNextQuestionButton, setFadeNextQuestionButton] = useState(true);
  const [showSummary, setShowSummary] = useState(false);

  const checkQuestion = () => {
    if (selectedOption == -1) {
      console.warn('Please select one option to proceed');
    } else if (
      questionData[questionNumber]['options'][selectedOption] ==
      questionData[questionNumber]['correctOption']
    ) {
      setCorrectQuestions(correctQuestions + 1);
      if (questionNumber == questionData.length - 1) {
        setFadeNextQuestionButton(false);
      } else {
        setQuestionNumber(questionNumber + 1);
      }
    } else {
      setWrongQuestions(wrongQuestions + 1);
      if (questionNumber == questionData.length - 1) {
        setFadeNextQuestionButton(false);
      } else {
        setQuestionNumber(questionNumber + 1);
      }
    }
  };

  return (
    <View style={myStyle.bg_color}>
      <View style={myStyle.title_view}>
        <Text style={myStyle.title}>QUIZ</Text>
      </View>
      <View style={myStyle.question_view}>
        <Text style={myStyle.question_text}>
          Question: {questionData[questionNumber]['question']}
        </Text>
      </View>
      <View style={myStyle.option_view}>
        <View>
          <Text style={myStyle.option_text}>Options:</Text>
        </View>
        <View style={myStyle.radio_option}>
          <RadioButton
            color="purple"
            status={selectedOption == 0 ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOption(0)}></RadioButton>
          <Text style={myStyle.radio_text}>
            {questionData[questionNumber]['options'][0]}
          </Text>
        </View>
        <View style={myStyle.radio_option}>
          <RadioButton
            color="purple"
            status={selectedOption == 1 ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOption(1)}></RadioButton>
          <Text style={myStyle.radio_text}>
            {questionData[questionNumber]['options'][1]}
          </Text>
        </View>
        <View style={myStyle.radio_option}>
          <RadioButton
            color="purple"
            status={selectedOption == 2 ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOption(2)}></RadioButton>
          <Text style={myStyle.radio_text}>
            {questionData[questionNumber]['options'][2]}
          </Text>
        </View>
        <View style={myStyle.radio_option}>
          <RadioButton
            color="purple"
            status={selectedOption == 3 ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOption(3)}></RadioButton>
          <Text style={myStyle.radio_text}>
            {questionData[questionNumber]['options'][3]}
          </Text>
        </View>
      </View>
      {fadeNextQuestionButton && (
        <View style={myStyle.btn}>
          <Button
            mode="contained"
            textColor="yellow"
            labelStyle={{fontSize: 18}}
            onPress={checkQuestion}>
            Next Question
          </Button>
        </View>
      )}

      <View style={myStyle.btn}>
        <Button
          mode="contained"
          labelStyle={{fontSize: 18}}
          onPress={() => setShowSummary(true)}>
          Finish
        </Button>
      </View>
      {showSummary && (
        <View style={myStyle.summary_view}>
          <Text style={myStyle.summary_text}>Summary</Text>
          <Text style={{color: 'black'}}>
            Total Questions:{questionNumber + 1}
          </Text>
          <Text style={{color: 'black'}}>
            Total Correct Answers:{correctQuestions}
          </Text>
          <Text style={{color: 'black'}}>
            Total Score:{correctQuestions * 10}
          </Text>
        </View>
      )}
    </View>
  );
};

const myStyle = StyleSheet.create({
  bg_color: {
    flex: 1,
    backgroundColor: 'white',
    color: 'black',
  },
  title_view: {
    backgroundColor: 'orange',
    padding: 8,
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '900',
  },
  question_view: {
    backgroundColor: 'lightgrey',
    padding: 8,
    width: '95%',
    alignSelf: 'center',
    margin: 10,
  },
  question_text: {
    color: 'black',
    fontSize: 30,
    fontWeight: '900',
  },
  option_view: {
    backgroundColor: 'lightblue',
    width: '95%',
    alignSelf: 'center',
    margin: 10,
    padding: 10,
  },
  option_text: {
    color: 'black',
    fontSize: 15,
    fontWeight: '900',
  },
  radio_option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio_text: {
    color: 'black',
    fontSize: 20,
  },
  btn: {
    width: '80%',
    alignSelf: 'center',
    margin: 10,
  },
  summary_view: {
    backgroundColor: 'lightgreen',
    padding: 10,
    width: '95%',
    alignSelf: 'center',
    margin: 10,
  },
  summary_text: {
    fontWeight: '900',
    color: 'black',
  },
});
export default Quiz;
