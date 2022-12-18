import { useAppDispatch } from '../../hooks';
import { SortType } from '../../const';
import { changeSort, sortOffers } from '../../store/offers/offers';
import { useState } from 'react';

type SortingProps = {
  sortType: string;
}

function Sorting({sortType}: SortingProps): JSX.Element {
  const [toggleList, setToggleList] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="/" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setToggleList((prevState) => !prevState)}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="/icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${toggleList ? 'places__options--opened' : ''}`}>
        {Object.entries(SortType).map(([key, value]) => (
          <li
            key={key}
            className={`places__option ${sortType === value ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => {
              setToggleList(false);
              dispatch(changeSort({sort: value}));
              dispatch(sortOffers());
            }}
          >
            {value}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
