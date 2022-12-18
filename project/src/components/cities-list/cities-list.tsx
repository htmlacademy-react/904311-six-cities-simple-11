import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import CityItem from '../city-item/city-item';
import { CITIES } from '../../const';
import { getCity } from '../../store/offers/selectors';
import { changeCity } from '../../store/offers/offers';

function CitiesList(): JSX.Element {
  const activeCity = useAppSelector(getCity);

  const dispatch = useAppDispatch();

  const changeCityHandle = (evt: React.MouseEvent<HTMLUListElement>) => {
    const target = evt.target as HTMLLIElement;
    dispatch(changeCity({city: target.innerText}));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list" onClick={changeCityHandle}>
          {CITIES.map((city, id) => {
            const keyValue = `${id}-city`;
            return (
              <CityItem
                key={keyValue}
                city={city}
                activeCity={activeCity}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
