import { configureStore } from '@reduxjs/toolkit';

import { apiVfinal } from './reducers/apiFinal';
import userReducer from './reducers/userSlice';
export const store = configureStore({
  reducer: {
    [apiVfinal.reducerPath]: apiVfinal.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiVfinal.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
