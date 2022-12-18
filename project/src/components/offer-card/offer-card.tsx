import { useAppDispatch } from '../../hooks';
import { generatePath, Link } from 'react-router-dom';
import { Offer } from '../../types/common';
import { StyleOfferCard } from '../../types/properties-style';
import { AppRoute } from '../../const';
import { setActiveOffer } from '../../store/offers/offers';

type OfferCardProps = {
  offer: Offer;
  styleOfferCard: StyleOfferCard;
}

function OfferCard({offer, styleOfferCard}: OfferCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  const {
    id,
    previewImage,
    isPremium,
    price,
    rating,
    title,
    type
  } = offer;

  const linkOfferCard = generatePath(AppRoute.OfferCard, {id: String(id)});

  return (
    <article className={`${styleOfferCard.classArticle} place-card`}
      onMouseEnter={() => dispatch(setActiveOffer(offer))}
      onMouseLeave={() => dispatch(setActiveOffer(null))}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ''}

      <div className={`${styleOfferCard.classImageWrapper} place-card__image-wrapper`}>
        <Link to={linkOfferCard}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Placeimage" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: `${Math.round(rating) / 5 * 100}%`
              }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={linkOfferCard}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
