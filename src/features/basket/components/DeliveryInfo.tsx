import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export const DeliveryInfo = () => {
  return (
    <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
      <Image
        source={require('@/assets/images/driver-profile.jpg')}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
      />
      <Text className="flex-1">Deliver in 50-75 min</Text>
      <TouchableOpacity>
        <Text className="text-skyblue">Change</Text>
      </TouchableOpacity>
    </View>
  );
};
