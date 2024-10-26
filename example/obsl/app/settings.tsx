import React from 'react';
import { Text, View } from 'react-native';
import { TaskNote } from '../components/TaskNote/TaskNote';

export default function Settings() {
  return (
    <>
      <View>
        <TaskNote
          text={'123'}
          type={'easy'}
          timeToSolve={0}
        />
        <TaskNote
          text={'123'}
          type={'easy'}
          timeToSolve={0}
        />
        <TaskNote
          text={'123'}
          type={'easy'}
          timeToSolve={0}
        />
      </View>
    </>
  );
}
