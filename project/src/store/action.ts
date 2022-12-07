import { createAction } from '@reduxjs/toolkit';
import { Offers, Reviews } from '../types/data';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction<{city: string}>('changeCity');

export const fillListOffer = createAction('fillListOffer');

export const changeSort = createAction<{sort: string}>('changeSort');

export const sortOffers = createAction('sortOffers');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const loadReviews = createAction<Reviews>('data/loadReviews');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('setError');
