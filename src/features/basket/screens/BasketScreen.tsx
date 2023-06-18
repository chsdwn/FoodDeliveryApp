import React, { useMemo } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';

import {
  BasketHeader,
  BasketItem,
  DeliveryInfo,
  InvoiceInfo,
} from '../components';
import { selectItems, selectItemsTotal } from '../store/basketSlice';
import { selectActiveRestaurant } from '@/features/restaurants/store/restaurantSlice';
import { IDish } from '@/types';

export const BasketScreen = () => {
  const restaurant = useSelector(selectActiveRestaurant);
  const total = useSelector(selectItemsTotal);
  const items = useSelector(selectItems);
  const groupedItems = useMemo(() => {
    if (!items || items.length === 0) return {};

    return items.reduce((acc, prev) => {
      if (!acc[prev.id]) acc[prev.id] = [];

      acc[prev.id].push(prev as IDish);
      return acc;
    }, {} as any) as Record<string, IDish[]>;
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <BasketHeader restaurantName={restaurant!.name} />

        <DeliveryInfo />

        <ScrollView
          showsVerticalScrollIndicator={false}
          className="divide-y divide-gray-200"
        >
          {Object.entries(groupedItems).map(([id, dishList]) => {
            const dish = dishList[0];

            return (
              <BasketItem
                key={`dish-${id}`}
                name={dish.name}
                count={dishList.length}
                price={dish.price}
                imageUrl={dish.image}
                itemId={dish.id}
              />
            );
          })}
        </ScrollView>

        <InvoiceInfo total={total} />
      </View>
    </SafeAreaView>
  );
};
