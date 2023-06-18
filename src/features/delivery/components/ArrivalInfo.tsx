import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Bar as ProgressBar } from 'react-native-progress';
import { XMarkIcon } from 'react-native-heroicons/solid';

import { colors } from '@/config/theme';
import { HomeStackNavigationProp } from '@/types';

type IProps = {
  restaurantName: string;
};
export const ArrivalInfo = ({ restaurantName }: IProps) => {
  const navigation = useNavigation<HomeStackNavigationProp>();

  return (
    <SafeAreaView className="z-10">
      <View className="flex-row justify-between items-center p-5">
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <XMarkIcon color="white" size={30} />
        </TouchableOpacity>
        <Text className="font-light text-white text-lg">Order Help</Text>
      </View>

      <View className="bg-white mx-5 my-2 rounded-md p-6 shadow-md">
        <View className="flex-row justify-between">
          <View>
            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
            <Text className="text-3xl font-bold">45-55 Minutes</Text>
          </View>
          <Image
            source={require('@/assets/animated-gifs/courier.gif')}
            className="h-20 w-20"
          />
        </View>

        <ProgressBar height={6} color={colors.skyblue} indeterminate />

        <Text className="mt-3 text-gray-500">
          Your order at {restaurantName} is beign prepared.
        </Text>
      </View>
    </SafeAreaView>
  );
};
