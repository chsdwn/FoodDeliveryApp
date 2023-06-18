import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/store';
import { IRestaurant } from '@/types';

type IInitialState = {
  activeRestaurant: IRestaurant | null;
};

const initialState: IInitialState = {
  activeRestaurant: null,
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setActiveRestaurant: (state, action: PayloadAction<IRestaurant | null>) => {
      state.activeRestaurant = action.payload;
    },
  },
});

export const { setActiveRestaurant } = restaurantSlice.actions;
export const restaurantSliceReducer = restaurantSlice.reducer;

export const selectActiveRestaurant = (state: RootState) =>
  state.restaurant.activeRestaurant;
