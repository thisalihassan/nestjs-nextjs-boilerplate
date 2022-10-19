import { configureStore } from '@reduxjs/toolkit';

import { api } from './reducers/apiFinal';
import userReducer from './reducers/userSlice';
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
