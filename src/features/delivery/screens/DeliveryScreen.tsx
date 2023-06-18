import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { ArrivalInfo, CourierInfo, DeliveryMap } from '../components';
import { selectActiveRestaurant } from '@/features/restaurants/store/restaurantSlice';

export const DeliveryScreen = () => {
  const restaurant = useSelector(selectActiveRestaurant);

  return (
    <View className="bg-skyblue flex-1 ">
      <ArrivalInfo restaurantName={restaurant!.name} />

      <DeliveryMap
        title={restaurant!.name}
        description={restaurant!.description}
        latitude={restaurant!.lat}
        longitude={restaurant!.lng}
      />

      <CourierInfo />
    </View>
  );
};
