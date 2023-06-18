import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackParamList = {
  Home: undefined;
  Restaurant: { id: number };
  Basket: undefined;
  PreparingOrder: undefined;
  Delivery: undefined;
};

export type HomeStackNavigationProp =
  NativeStackNavigationProp<HomeStackParamList>;

export type RestaurantRouteProp = RouteProp<HomeStackParamList, 'Restaurant'>;
