import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserEntity } from './generated';

interface userState {
  isAuthenticated: boolean;
  user: UserEntity | Record<string, never>;
}

const initialState: userState = { isAuthenticated: false, user: {} };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserSuccess(state, action: PayloadAction<UserEntity>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    getUserFail(state) {
      state.isAuthenticated = false;
      state.user = {};
    },
  },
});

export const { getUserSuccess, getUserFail } = userSlice.actions;
export default userSlice.reducer;
