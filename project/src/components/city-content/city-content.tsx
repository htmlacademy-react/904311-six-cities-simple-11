import { PropertiesMap, StyleOfferCard } from '../../const';
import { useAppSelector } from '../../hooks';
import ListOffers from '../offers-list/offers-list';
import Map from '../map/map';
import Sorting from '../sorting/sorting';
import { getCity, getOffersSorted, getSort } from '../../store/offers/selectors';

function CityContent(): JSX.Element {
  const activeCity = useAppSelector(getCity);
  const offers = useAppSelector(getOffersSorted);
  const activeSort = useAppSelector(getSort);

  const offersByCity = offers.filter((offer) => offer.city.name === activeCity);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersByCity.length} places to stay in {activeCity}</b>

          <Sorting sortType={activeSort} />

          <ListOffers offers={offersByCity} styleOfferCard={StyleOfferCard.CityOffer} />

        </section>

        <div className="cities__right-section">
          <Map offers={offersByCity} propertiesMap={PropertiesMap.Main} />
        </div>

      </div>
    </div>
  );
}

export default CityContent;
