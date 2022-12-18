export enum AppRoute {
  Main = '/',
  Login = '/login',
  OfferCard = '/offer/:id',
  NotFound = '/404'
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const TIMEOUT_SHOW_ERROR = 2000;

export const PropertiesMap = {
  Main: {
    className: 'cities__map',
    height: '980px'
  },
  NearOffer: {
    className: 'property__map',
    height: '579px'
  }
};

export const StyleOfferCard = {
  CityOffer: {
    classArticle: 'cities__card',
    classImageWrapper: 'cities__image-wrapper'
  },
  NearOffer: {
    classArticle: 'near-places__card',
    classImageWrapper: 'near-places__image-wrapper'
  }
};

export const SortType = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export enum NameSpace {
  User = 'USER',
  Offers = 'OFFERS',
  Offer = 'OFFER',
}
