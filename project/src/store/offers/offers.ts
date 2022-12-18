import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, SortType } from '../../const';
import { Offer } from '../../types/common';
import { OffersState } from '../../types/state';
import { sortByType } from '../../utils/sort';
import { fetchOffersAction } from '../api-actions';

const initialState: OffersState = {
  city: 'Paris',
  offersDefault: [],
  sort: SortType.POPULAR,
  offersSorted: [],
  activeOffer: null,
  isOffersLoading: false,
};

export const offersReducer = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{city: string}>) => {
      state.city = action.payload.city;
    },
    setActiveOffer: (state, action: PayloadAction<Offer | null>) => {
      state.activeOffer = action.payload;
    },
    changeSort: (state, action: PayloadAction<{sort: string}>) => {
      state.sort = action.payload.sort;
    },
    sortOffers: (state) => {
      state.offersSorted = sortByType(state.offersDefault, state.offersSorted, state.sort);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offersDefault = action.payload;
        state.offersSorted = action.payload;
        state.isOffersLoading = false;
        state.sort = SortType.POPULAR;
      });
  }
});

export const {changeCity, setActiveOffer, changeSort, sortOffers} = offersReducer.actions;
