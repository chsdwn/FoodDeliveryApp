import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { StarIcon } from 'react-native-heroicons/solid';

import { categories } from '@/data';
import { HomeStackNavigationProp, IRestaurant } from '@/types';

type IProps = {
  restaurant: IRestaurant;
};

export const RestaurantCard = ({ restaurant }: IProps) => {
  const navigation = useNavigation<HomeStackNavigationProp>();

  const category = categories.find((c) => c.id === restaurant.categoryId)!;

  const handleRestaurantPress = () => {
    navigation.navigate('Restaurant', { id: restaurant.id });
  };

  return (
    <TouchableOpacity
      onPress={handleRestaurantPress}
      className="bg-white mr-3 shadow"
    >
      <Image
        source={{ uri: restaurant.image }}
        className="h-36 w-64 rounded-sm"
      />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{restaurant.name}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{restaurant.rating}</Text>
            &nbsp;·&nbsp;
            {category.name}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">
            Nearby · {restaurant.address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
