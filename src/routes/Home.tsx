import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BasketScreen } from '@/features/basket/screens';
import { DeliveryScreen } from '@/features/delivery/screens';
import { PreparingOrderScreen } from '@/features/order/screens';
import { RestaurantScreen } from '@/features/restaurants/screens';
import { HomeScreen } from '@/screens';
import { HomeStackParamList } from '@/types';

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
