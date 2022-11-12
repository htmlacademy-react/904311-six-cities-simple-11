import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';

const Setting = {
  CountRentOffers: 10
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      countRentOffers = {Setting.CountRentOffers}
      offers = {offers}
    />
  </React.StrictMode>,
);
