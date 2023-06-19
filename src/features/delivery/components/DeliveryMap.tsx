import React from 'react';
import MapView, { Marker } from 'react-native-maps';

import { IS_IOS } from '@/config';
import { colors } from '@/config/theme';

type IProps = {
  title: string;
  description: string;
  latitude: number;
  longitude: number;
};
export const DeliveryMap = ({
  title,
  description,
  latitude,
  longitude,
}: IProps) => {
  return (
    <MapView
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      className="flex-1 -mt-10 z-0"
      mapType={IS_IOS ? 'mutedStandard' : 'standard'}
    >
      <Marker
        coordinate={{
          latitude,
          longitude,
        }}
        title={title}
        description={description}
        identifier="origin"
        pinColor={colors.skyblue}
      />
    </MapView>
  );
};
