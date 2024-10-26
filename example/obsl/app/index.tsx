import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { AvatarIcon } from '../assets/icons/avatar-icon';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Open up App.tsx to start working on your
        app!
      </Text>
      <StatusBar style="auto" />
      <AvatarIcon
        width={100}
        height={100}
        color={'#e8eaed'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
