import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { store } from './store';

export const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView className="w-screen h-screen">
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <View>
            <Text>FoodDelivery</Text>
          </View>
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
};
