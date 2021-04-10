import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import coutnerReducer from '../features/counter/counterSlice';
import registryReducer from '../features/registry/registrySlice';

export const store = configureStore({
  reducer: {
    counter: coutnerReducer,
    registry: registryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
