import { PropertiesMap } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setActiveOffer } from '../../store/offers/offers';
import { Offer, Offers } from '../../types/common';
import Map from '../map/map';
import ReviewsContent from '../reviews-content/reviews-content';

type OfferFeaturesProps = {
  offer: Offer;
  nearbyOffers: Offers;
}

function OfferFeatures({offer, nearbyOffers}: OfferFeaturesProps): JSX.Element {
  const allOffers = nearbyOffers.concat(offer);

  const dispatch = useAppDispatch();

  dispatch(setActiveOffer(offer));

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {offer?.images.map((image, index) => {
            const keyValue = `${index}-${image}`;
            return (
              <div key={keyValue} className="property__image-wrapper">
                <img className="property__image" src={image} alt="Photostudio" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {offer?.isPremium ?
            <div className="property__mark">
              <span>Premium</span>
            </div>
            : ''}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {offer?.title}
            </h1>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span
                style={{
                  width: `${offer ? Math.round(offer.rating) / 5 * 100 : ''}%`
                }}
              >
              </span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{offer?.rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {offer?.type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {offer?.bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {offer?.maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{offer?.price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {offer?.goods.map((item, index) => {
                const keyValue = `${index}-${item}`;
                return (
                  <li key={keyValue} className="property__inside-item">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className={`property__avatar-wrapper ${offer?.host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                <img className="property__avatar user__avatar" src={offer?.host.avatarUrl} width="74" height="74" alt="Host avatar" />
              </div>
              <span className="property__user-name">
                {offer?.host.name}
              </span>
              <span className="property__user-status">
                {offer?.host.isPro ? 'Pro' : ''}
              </span>
            </div>
            <div className="property__description">
              <p className="property__text">
                {offer?.description}
              </p>
            </div>
          </div>
          <ReviewsContent />
        </div>
      </div>
      <Map
        offers={allOffers}
        propertiesMap={PropertiesMap.NearOffer}
      />
    </section>
  );
}

export default OfferFeatures;
