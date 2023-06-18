import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Currency from 'react-currency-formatter';

import { IS_ANDROID } from '@/config';
import { HomeStackNavigationProp } from '@/types';

const DELIVERY_FEE = 5.99;

type IProps = {
  total: number;
};
export const InvoiceInfo = ({ total }: IProps) => {
  const navigation = useNavigation<HomeStackNavigationProp>();

  return (
    <View className="p-5 bg-white mt-5 space-y-4">
      <View className="flex-row justify-between">
        <Text className="text-gray-400">Subtotal</Text>
        <Text className="text-gray-400">
          <Currency quantity={total} currency="USD" />
        </Text>
      </View>

      <View className="flex-row justify-between">
        <Text className="text-gray-400">Delivery Fee</Text>
        <Text className="text-gray-400">
          <Currency quantity={DELIVERY_FEE} currency="USD" />
        </Text>
      </View>

      <View className="flex-row justify-between">
        <Text>Order Total</Text>
        <Text className="font-extrabold">
          <Currency quantity={total + DELIVERY_FEE} currency="USD" />
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('PreparingOrder')}
        className={`rounded-l p-4 ${IS_ANDROID ? 'mb-6' : ''} ${
          total === 0 ? 'bg-gray-400' : 'bg-skyblue'
        }`}
        disabled={total === 0}
      >
        <Text className="text-center text-white text-lg font-bold">
          Place Order
        </Text>
      </TouchableOpacity>
    </View>
  );
};
