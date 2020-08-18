import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import {Provider as PaperProvider} from 'react-native-paper';
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <PaperProvider>
        <Screen1 />
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
