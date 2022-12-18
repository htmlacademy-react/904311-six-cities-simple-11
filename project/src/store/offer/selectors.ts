import { NameSpace } from '../../const';
import { Offer, Offers, Reviews } from '../../types/common';
import { State } from '../../types/state';

export const getSelectedOffer = (state: State): Offer | null => state[NameSpace.Offer].selectedOffer;
export const getNearbyOffers = (state: State): Offers => state[NameSpace.Offer].nearbyOffers;
export const getReviews = (state: State): Reviews => state[NameSpace.Offer].reviews;
export const getSelectedOfferLoadingStatus = (state: State): boolean => state[NameSpace.Offer].isSelectedOfferLoading;
export const getErrorSelectedOfferLoading = (state: State): boolean => state[NameSpace.Offer].errorSelectedOfferLoading;
export const getNearbyOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offer].isNearbyOffersLoading;
export const getReviewsLoadingStatus = (state: State): boolean => state[NameSpace.Offer].isReviewsLoading;
export const getReviewSendingStatus = (state: State): boolean => state[NameSpace.Offer].isReviewSending;
export const getReviewSentSuccessfully = (state: State): boolean => state[NameSpace.Offer].isReviewSentSuccessfully;

