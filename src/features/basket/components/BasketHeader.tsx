import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { XCircleIcon } from 'react-native-heroicons/solid';

import { colors } from '@/config/theme';

type IProps = {
  restaurantName: string;
};
export const BasketHeader = ({ restaurantName }: IProps) => {
  const navigation = useNavigation();

  return (
    <View className="p-5 border-b border-skyblue bg-white shadow-xs">
      <View>
        <Text className="text-lg font-bold text-center">Basket</Text>
        <Text className="text-center text-gray-400">{restaurantName}</Text>
      </View>

      <TouchableOpacity
        onPress={navigation.goBack}
        className="rounded-full bg-gray-100 absolute top-3 right-5"
      >
        <XCircleIcon color={colors.skyblue} size={50} />
      </TouchableOpacity>
    </View>
  );
};
