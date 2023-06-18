import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from 'react-native-heroicons/outline';

import { colors } from '@/config/theme';

export const Header = () => {
  return (
    <View>
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={require('@/assets/images/driver-profile.jpg')}
          resizeMode="cover"
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color={colors.skyblue} />
          </Text>
        </View>

        <UserIcon size={35} color={colors.skyblue} />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
            className="p-0"
          />
        </View>

        <AdjustmentsVerticalIcon color={colors.skyblue} />
      </View>
    </View>
  );
};
