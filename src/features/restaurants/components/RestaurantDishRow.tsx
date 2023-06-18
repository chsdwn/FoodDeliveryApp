import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Currency from 'react-currency-formatter';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';

import { colors } from '@/config/theme';
import {
  addToBasket,
  removeFromBasket,
  selectItemsById,
} from '@/features/basket/store/basketSlice';
import { RootState } from '@/store';
import { IDish } from '@/types';

type IProps = {
  dish: IDish;
};
export const RestaurantDishRow = ({ dish }: IProps) => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) =>
    selectItemsById(state, dish.id),
  );
  const removeFromBasketBtnDisabled = items.length === 0;
  const [pressed, setPressed] = useState(false);

  const handleAddToBasket = () => {
    dispatch(addToBasket(dish));
  };

  const handleRemoveFromBasket = () => {
    dispatch(removeFromBasket(dish.id));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setPressed((prev) => !prev)}
        className={`bg-white border p-4 border-gray-200 ${
          pressed ? 'border-b-0' : ''
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{dish.name}</Text>
            <Text className="text-gray-400">{dish.description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={dish.price} currency="USD" />
            </Text>
          </View>

          <View>
            <Image
              source={{ uri: dish.image }}
              className="h-20 w-20 bg-gray-300 p-4"
              style={styles.imageBorder}
            />
          </View>
        </View>
      </TouchableOpacity>

      {pressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              onPress={handleRemoveFromBasket}
              disabled={removeFromBasketBtnDisabled}
            >
              <MinusCircleIcon
                size={40}
                color={removeFromBasketBtnDisabled ? 'gray' : colors.skyblue}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={handleAddToBasket}>
              <PlusCircleIcon size={40} color={colors.skyblue} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  imageBorder: {
    borderWidth: 1,
    borderColor: colors.white,
  },
});
