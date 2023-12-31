import {
  combineReducers,
  ActionFromReducersMapObject,
  Reducer,
  StateFromReducersMapObject,
} from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '@/api/apiSlice';
import { basketSliceReducer } from '@/features/basket/store/basketSlice';
import { restaurantSliceReducer } from '@/features/restaurants/store/restaurantSlice';

const reducers = {
  basket: basketSliceReducer,
  restaurant: restaurantSliceReducer,
};

export const store = configureStore({
  reducer: {
    ...reducers,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

const rootReducer: Reducer<
  StateFromReducersMapObject<typeof reducers>,
  ActionFromReducersMapObject<typeof reducers>
> = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;
