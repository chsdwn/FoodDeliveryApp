import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

type IProps = {
  uri: string;
  title: string;
};

export const RestaurantLogo = ({ uri, title }: IProps) => (
  <TouchableOpacity className="relative mr-2">
    <Image source={{ uri }} resizeMode="cover" className="h-20 w-20 rounded" />
    <Text className="absolute bottom-1 px-1 w-full text-white font-bold">
      {title}
    </Text>
  </TouchableOpacity>
);
