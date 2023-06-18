import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import Currency from 'react-currency-formatter';

import { selectItems, selectItemsTotal } from '../store/basketSlice';
import { HomeStackNavigationProp } from '@/types';

export const BasketSummary = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();

  const items = useSelector(selectItems);
  const total = useSelector(selectItemsTotal);

  const disabled = items.length === 0;

  return (
    <View className="absolute w-full bottom-10">
      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        className={`mx-5 p-4 rounded-lg flex-row items-center space-x-1 ${
          disabled ? 'bg-gray-400' : 'bg-skyblue'
        }`}
        disabled={disabled}
      >
        <Text
          className={`text-white font-extrabold text-lg py-1 px-2 ${
            disabled ? 'bg-gray-500' : 'bg-darkskyblue'
          }`}
        >
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={total} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};
