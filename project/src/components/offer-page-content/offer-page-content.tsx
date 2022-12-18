import { useAppSelector } from '../../hooks';
import { getNearbyOffers, getSelectedOffer } from '../../store/offer/selectors';
import { Offer } from '../../types/common';
import NearbyOffers from '../nearby-offers/nearby-offers';
import OfferFeatures from '../offer-features/offer-features';

function OfferPageContent(): JSX.Element {
  const offer = useAppSelector(getSelectedOffer) as Offer;
  const nearbyOffers = useAppSelector(getNearbyOffers);

  return (
    <main className="page__main page__main--property">
      <OfferFeatures offer={offer} nearbyOffers={nearbyOffers}/>
      <NearbyOffers nearbyOffers={nearbyOffers}/>
    </main>
  );
}

export default OfferPageContent;
