import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offerReducer } from './offer/offer';
import { offersReducer } from './offers/offers';
import { userReducer } from './user/user';

export const rootReducer = combineReducers({
  [NameSpace.User]: userReducer.reducer,
  [NameSpace.Offers]: offersReducer.reducer,
  [NameSpace.Offer]: offerReducer.reducer,
});
