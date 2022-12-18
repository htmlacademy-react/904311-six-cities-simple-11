import { AuthorizationStatus } from '../const';
import { store } from '../store/index';
import { Offer, Offers, Reviews } from './common';
import { UserInfo } from './user-data';

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  userInfo: UserInfo | null;
  isUserInfoLoading: boolean;
}

export type OffersState = {
  city: string;
  offersDefault: Offers;
  sort: string;
  offersSorted: Offers;
  activeOffer: Offer | null;
  isOffersLoading: boolean;
}

export type OfferState = {
  selectedOffer: Offer | null;
  nearbyOffers: Offers;
  reviews: Reviews;
  isSelectedOfferLoading: boolean;
  errorSelectedOfferLoading: boolean;
  isNearbyOffersLoading: boolean;
  isReviewsLoading: boolean;
  isReviewSending: boolean;
  isReviewSentSuccessfully: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
