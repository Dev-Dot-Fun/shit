import { ViewProps } from 'react-native';

export interface TaskNoteProps extends ViewProps {
  text: string;
  type: 'easy' | 'medium' | 'hard';
  timeToSolve: number;
}
