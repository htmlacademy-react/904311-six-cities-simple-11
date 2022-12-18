import { useRef, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { Offers, Location } from '../../types/common';
import { PropertiesMap } from '../../types/properties-style';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { getActiveOffer } from '../../store/offers/selectors';

type MapProps = {
  offers: Offers;
  propertiesMap: PropertiesMap;
}

const defaultIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const currentIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

function Map({offers, propertiesMap}: MapProps): JSX.Element {
  const activeOffer = useAppSelector(getActiveOffer);

  const city: Location = offers[0].city.location;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView(
        [city.latitude, city.longitude],
        city.zoom
      );
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            activeOffer !== null && offer.id === activeOffer.id
              ? currentIcon
              : defaultIcon
          )
          .addTo(map);
      });
    }
  }, [map, city, offers, activeOffer]);

  return (
    <section className={`${propertiesMap.className} map`}
      style={{height: propertiesMap.height}}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
