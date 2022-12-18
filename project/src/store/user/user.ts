import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { UserState } from '../../types/state';
import { checkAuthAction, fetchUserInfoAction, loginAction, logoutAction } from '../api-actions';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
  isUserInfoLoading: false,
};

export const userReducer = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        // dispatch(fetchUserInfoAction());
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        // dispatch(fetchUserInfoAction());
      })
      .addCase(fetchUserInfoAction.pending, (state) => {
        state.isUserInfoLoading = true;
      })
      .addCase(fetchUserInfoAction.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.isUserInfoLoading = false;
      })
      .addCase(fetchUserInfoAction.rejected, (state) => {
        state.userInfo = null;
        state.isUserInfoLoading = false;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
