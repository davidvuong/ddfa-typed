// @flow
import Joi from 'joi';
import type { Review } from '../models/Review';

/* Type definitions */

export type ReviewCreateRequest = {
  checkInId: string,
  amountPaid: number,
  currency: string,
  comment?: ?string,
  foodRating?: ?number,
  environmentRating?: ?number,
  serviceRating?: ?number,
};

export type ReviewCreateResponse = {
  id: string,
};

/* Values */

const ratingJoi = Joi
  .number()
  .max(10)
  .min(0)
  .precision(2)
  .allow(null);

export const ReviewCreateRequestSchema = Joi.object().keys({
  checkInId: Joi.string().guid().required(),
  amountPaid: Joi.number().min(0).required(),
  currency: Joi.string().max(3).required(),
  comment: Joi.string().max(2048).allow(null),
  foodRating: ratingJoi,
  environmentRating: ratingJoi,
  serviceRating: ratingJoi,
});

export function ReviewCreateResponseEncodeJson(review: Review): ReviewCreateResponse {
  return { id: review.id };
}
