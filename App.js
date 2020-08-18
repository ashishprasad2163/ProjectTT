import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
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
import {NavigationContainer} from '@react-navigation/native';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import Navigator from './src/routes/Navigator';
import {enableScreens} from 'react-native-screens';
import {Provider as PaperProvider} from 'react-native-paper';
enableScreens();
//redux
import {Provider} from 'react-redux';
import store from './src/store';
import {getUsers} from './src/actions/user';
const App: () => React$Node = () => {
  useEffect(() => {
    store.dispatch(getUsers());
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
