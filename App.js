
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
export default function App() {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <EvilIcons name="search" size={30} />
      <EvilIcons name="" size={30} />
      <StatusBar />
    </View>
  );
}
