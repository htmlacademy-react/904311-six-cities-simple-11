import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Review } from '../../types/common';
import { OfferState } from '../../types/state';
import { sortByDate } from '../../utils/sort';
import { fetchNearbyOffersAction, fetchReviewsAction, fetchSelectedOfferAction, sendReviewAction } from '../api-actions';

const initialState: OfferState = {
  selectedOffer: null,
  nearbyOffers: [],
  reviews: [],
  isSelectedOfferLoading: false,
  errorSelectedOfferLoading: false,
  isNearbyOffersLoading: false,
  isReviewsLoading: false,
  isReviewSending: false,
  isReviewSentSuccessfully: false,
};

export const offerReducer = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    addReview: (state, action: PayloadAction<Review>) => {
      state.reviews.push(action.payload);
      state.reviews.sort(sortByDate);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSelectedOfferAction.pending, (state) => {
        state.isSelectedOfferLoading = true;
        state.errorSelectedOfferLoading = false;
      })
      .addCase(fetchSelectedOfferAction.fulfilled, (state, action) => {
        state.selectedOffer = action.payload;
        state.isSelectedOfferLoading = false;
      })
      .addCase(fetchSelectedOfferAction.rejected, (state) => {
        state.isSelectedOfferLoading = false;
        state.errorSelectedOfferLoading = true;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isNearbyOffersLoading = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.isNearbyOffersLoading = false;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.isNearbyOffersLoading = false;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.reviews.sort(sortByDate);
        state.isReviewsLoading = false;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isReviewsLoading = false;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.isReviewSentSuccessfully = false;
        state.isReviewSending = true;
      })
      .addCase(sendReviewAction.fulfilled, (state) => {
        state.isReviewSentSuccessfully = true;
        state.isReviewSending = false;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.isReviewSentSuccessfully = false;
        state.isReviewSending = false;
      });
  }
});

export const {addReview} = offerReducer.actions;
