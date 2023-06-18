import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/store';
import { IDish } from '@/types';

type IInitialState = {
  items: IDish[];
};
const initialState: IInitialState = {
  items: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IDish>) => {
      state.items.push(action.payload);
    },
    removeFromBasket: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((i) => i.id === action.payload);
      if (index > -1) state.items.splice(index, 1);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const basketSliceReducer = basketSlice.reducer;

export const selectItems = (state: RootState) => state.basket.items;
export const selectItemsById = createSelector(
  [selectItems, (_, id: number) => id],
  (items, id: number) => items.filter((i) => i.id === id),
);
export const selectItemsTotal = (state: RootState) =>
  state.basket.items.reduce((acc, curr) => acc + curr.price, 0);
