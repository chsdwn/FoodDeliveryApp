import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Header } from '@/components';
import { restaurants } from '@/data';
import {
  RestaurantLogo,
  RestaurantsCarousel,
} from '@/features/restaurants/components';

export const HomeScreen = () => {
  return (
    <View className="bg-white pt-5">
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.inlineContainer}
        >
          {restaurants.map((r) => (
            <RestaurantLogo
              key={`restaurant-${r.id}`}
              title={r.name}
              uri={r.image}
            />
          ))}
        </ScrollView>

        <RestaurantsCarousel
          title="Featured"
          description="Paid placements from our partners"
          restaurants={restaurants}
        />
        <RestaurantsCarousel
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
          restaurants={restaurants}
        />
        <RestaurantsCarousel
          title="Offers near you!"
          description="WHy not support your local restaurant tonight!"
          restaurants={restaurants}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 164,
  },
  inlineContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});
