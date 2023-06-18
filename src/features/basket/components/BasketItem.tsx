import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Currency from 'react-currency-formatter';

import { removeFromBasket } from '../store/basketSlice';

type IProps = {
  name: string;
  count: number;
  price: number;
  imageUrl: string;
  itemId: number;
};
export const BasketItem = ({
  name,
  count,
  price,
  imageUrl,
  itemId,
}: IProps) => {
  const dispatch = useDispatch();

  return (
    <View className="flex-row items-center space-x-3 bg-white py-2 px-5">
      <Text className="text-skyblue">{count} x</Text>
      <Image source={{ uri: imageUrl }} className="h-12 w-12 rounded-full" />
      <Text className="flex-1">{name}</Text>

      <Text className="text-gray-600">
        <Currency quantity={price} currency="USD" />
      </Text>

      <TouchableOpacity>
        <Text
          className="text-skyblue text-xs"
          onPress={() => dispatch(removeFromBasket(itemId))}
        >
          Remove
        </Text>
      </TouchableOpacity>
    </View>
  );
};
