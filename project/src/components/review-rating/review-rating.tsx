import { ChangeEvent, Fragment } from 'react';
import { useAppSelector } from '../../hooks';
import { getReviewSendingStatus } from '../../store/offer/selectors';

type ReviewRatingProps = {
  rating: number | null;
  handleRatingChange: ({target}: ChangeEvent<HTMLInputElement>) => void;
}

const ratingStars: string[] = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];

function ReviewRating({rating, handleRatingChange}: ReviewRatingProps): JSX.Element {
  const isReviewSending = useAppSelector(getReviewSendingStatus);

  return (
    <div className="reviews__rating-form form__rating">
      {
        ratingStars.map((item, index) => {
          const value = ratingStars.length - index;
          return (
            <Fragment key={item}>
              <input
                className="form__rating-input visually-hidden"
                onChange={handleRatingChange}
                name="rating"
                value={value}
                id={`${value}-stars`}
                type="radio"
                checked={rating === value}
                disabled={isReviewSending}
              />
              <label
                htmlFor={`${value}-stars`}
                className="reviews__rating-label form__rating-label"
                title={item}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })
      }
    </div>
  );
}

export default ReviewRating;
