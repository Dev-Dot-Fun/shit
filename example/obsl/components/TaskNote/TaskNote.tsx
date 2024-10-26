import React from 'react';
import { TaskNoteProps } from './tasknote.props';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export const TaskNote = ({
  text,
  type,
  timeToSolve,
  ...args
}: TaskNoteProps) => {
  return (
    <>
      <View style={style.wrapper}>
        <View style={style.content}>
          <Text>{text}</Text>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  wrapper: {
    height: 200,
    borderColor: '#444444',
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: 'solid',
    margin: 5,
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    margin: 5,
    borderStyle: 'dashed',
    borderColor: '#ff0000',
    borderWidth: 2,
    borderRadius: 10,
  },
});
