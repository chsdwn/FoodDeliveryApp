import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

export const CourierInfo = () => {
  return (
    <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
      <Image
        source={require('@/assets/images/driver-profile.jpg')}
        className="h-12 w-12 bg-gray-300 rounded-full ml-5"
      />

      <View className="flex-1">
        <Text className="text-lg">Ayse Fatma</Text>
        <Text className="text-gray-400">Your Rider</Text>
      </View>

      <Text className="text-skyblue text-lg mr-5 font-bold">Call</Text>
    </SafeAreaView>
  );
};
