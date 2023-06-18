import React, { useEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from 'react-native-heroicons/solid';

import { RestaurantDishRow } from '../components';
import { setActiveRestaurant } from '../store/restaurantSlice';
import { colors } from '@/config/theme';
import { categories, dishes, restaurants } from '@/data';
import { BasketSummary } from '@/features/basket/components/BasketSummary';
import { RestaurantRouteProp } from '@/types';

export const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: { id },
  } = useRoute<RestaurantRouteProp>();

  const restaurant = restaurants.find((r) => r.id === id)!;
  const category = categories.find((c) => c.id === restaurant.categoryId)!;
  const dishList = dishes.filter((d) => d.restaurantId === restaurant.id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveRestaurant(restaurant));
  }, [dispatch, restaurant]);

  return (
    <View className="relative h-full">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="relative">
          <Image
            source={{ uri: restaurant.image }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color={colors.skyblue} />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{restaurant.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{restaurant.rating}</Text>
                  &nbsp;·&nbsp;{category.name}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <MapPinIcon color="gray" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500">
                  Nearby&nbsp;·&nbsp;{restaurant.address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">
              {restaurant.description}
            </Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color={colors.skyblue} />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {dishList.map((d) => (
            <RestaurantDishRow key={`dish-${d.id}`} dish={d} />
          ))}
        </View>
      </ScrollView>

      <BasketSummary />
    </View>
  );
};
