import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './routes';
import { store } from './store';

export const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView className="w-screen h-screen">
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <Home />
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
};
