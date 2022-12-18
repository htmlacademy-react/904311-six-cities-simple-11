import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import { getReviewSendingStatus, getReviewSentSuccessfully, getSelectedOffer } from '../../store/offer/selectors';
import ReviewRating from '../review-rating/review-rating';

enum ReviewTextLength {
  Min = 50,
  Max = 300,
}

function ReviewForm(): JSX.Element {
  const offerId = useAppSelector(getSelectedOffer)?.id;
  const isReviewSending = useAppSelector(getReviewSendingStatus);
  const isReviewSentSuccessfully = useAppSelector(getReviewSentSuccessfully);

  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    rating: null,
    review: ''
  });

  const isFormInvalid = formData.rating === null
    || formData.review.length < ReviewTextLength.Min
    || formData.review.length > ReviewTextLength.Max;

  const handleRatingChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    setFormData({...formData, [name]: +value});
  };

  const fieldChangeHandle = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = target;
    setFormData({...formData, [name]: value});
  };

  const formSubmitHandle = (evt: FormEvent) => {
    evt.preventDefault();

    if (formData.review !== '' && formData.rating !== null && offerId !== undefined) {
      dispatch(sendReviewAction({
        id: offerId,
        comment: formData.review,
        rating: formData.rating,
      }));
    }
  };

  useEffect(() => {
    if (isReviewSentSuccessfully) {
      setFormData({
        rating: null,
        review: ''
      });
    }
  }, [isReviewSentSuccessfully]);

  return (
    <form className="reviews__form form" action="/" method="post" onSubmit={formSubmitHandle}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewRating rating={formData.rating} handleRatingChange={handleRatingChange} />
      <textarea
        className="reviews__textarea form__textarea"
        onChange={fieldChangeHandle} value={formData.review}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isReviewSending}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isFormInvalid || isReviewSending}>{!isReviewSending ? 'Submit' : 'Sending...'}</button>
      </div>
    </form>
  );
}

export default ReviewForm;
