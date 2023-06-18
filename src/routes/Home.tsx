import React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeStackParamList } from '@/types';

const HomeScreen = () => (
  <View>
    <Text>Home</Text>
  </View>
);

const RestaurantScreen = () => (
  <View>
    <Text>Restaurant</Text>
  </View>
);

const BasketScreen = () => (
  <View>
    <Text>Basket</Text>
  </View>
);

const PreparingOrderScreen = () => (
  <View>
    <Text>Preparing Order</Text>
  </View>
);

const DeliveryScreen = () => (
  <View>
    <Text>Delivery</Text>
  </View>
);

const Stack = createNativeStackNavigator<HomeStackParamList>();
export const Home = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen
        name="Basket"
        component={BasketScreen}
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen
        name="PreparingOrder"
        component={PreparingOrderScreen}
        options={{ presentation: 'fullScreenModal' }}
      />
      <Stack.Screen
        name="Delivery"
        component={DeliveryScreen}
        options={{ presentation: 'fullScreenModal' }}
      />
    </Stack.Navigator>
  );
};
