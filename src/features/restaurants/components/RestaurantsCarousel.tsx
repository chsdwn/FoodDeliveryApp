import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';

import { RestaurantCard } from '.';
import { colors } from '@/config/theme';
import { IRestaurant } from '@/types';

type IProps = {
  title: string;
  description: string;
  restaurants: IRestaurant[];
};

export const RestaurantsCarousel = ({
  title,
  description,
  restaurants,
}: IProps) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={colors.skyblue} />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        className="pt-4"
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={`restaurant-card-${restaurant.id}`}
            restaurant={restaurant}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
