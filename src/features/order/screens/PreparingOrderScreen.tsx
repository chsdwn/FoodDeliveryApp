import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Animated, { SlideInDown } from 'react-native-reanimated';

import { HomeStackNavigationProp } from '@/types';

export const PreparingOrderScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();

  useEffect(() => {
    const id = setTimeout(() => {
      navigation.navigate('Delivery');
    }, 1000 * 5);

    return () => {
      clearTimeout(id);
    };
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-skyblue justify-center items-center">
      <Animated.Image
        source={require('@/assets/animated-gifs/hourglass.gif')}
        className="w-56 h-64"
        entering={SlideInDown.duration(1500).delay(250)}
      />
      <Animated.Text
        entering={SlideInDown.duration(1500).delay(2000)}
        className="text-lg font-bold my-10 mx-2 text-white text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animated.Text>
    </SafeAreaView>
  );
};
