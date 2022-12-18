import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getReviews } from '../../store/offer/selectors';
import { getAuthorizationStatus } from '../../store/user/selectors';
import ReviewForm from '../review-form/review-form';
import ReviewItem from '../review-item/review-item';

function ReviewsContent(): JSX.Element {
  const reviews = useAppSelector(getReviews);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review}/>
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth ? <ReviewForm /> : ''}
    </section>
  );
}

export default ReviewsContent;
