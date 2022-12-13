import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import MainContent from '../../components/main-content/main-content';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOffersAction } from '../../store/api-actions';
import LoadingPage from '../loading-page/loading-page';


function MainPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);

  const dispatch = useAppDispatch();

  const isDataLoading = offers.length === 0 || isOffersLoading;

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities. Main</title>
      </Helmet>

      <Header />

      {
        isDataLoading
          ? <LoadingPage />
          : <MainContent />
      }

    </div>
  );
}

export default MainPage;
