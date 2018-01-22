// @flow
import _ from 'lodash';
import Joi from 'joi';

import type { User } from '../models/User';
import type { CheckIn } from '../models/CheckIn';
import type { Photo } from '../models/Photo';
import type { Review } from '../models/Review';

/* Type definitions */

export type CheckInGetRequest = {
  id: string,
};

type CheckInReviewUserGetResponse = ?{
  id: string,
  name?: ?string,
  username: string,
  avatar?: ?string,
};
type CheckInReviewsGetResponse = Array<{
  id: string,
  amountPaid: number,
  currency: string,
  comment?: ?string,
  foodRating?: ?number,
  serviceRating?: ?number,
  environmentRating?: ?number,
  createdAt: number,
  user: CheckInReviewUserGetResponse,
}>;
type CheckInPhotosGetResponse = Array<{
  id: string,
  createdAt: number,
  user: CheckInReviewUserGetResponse,
}>;
export type CheckInGetResponse = {
  id: string,
  name: string,
  address: string,
  latitude: number,
  longitude: number,
  tz: string,
  publishedAt?: ?number,
  createdAt: number,
  userId: string,
  user: CheckInReviewUserGetResponse,
  reviews: CheckInReviewsGetResponse,
  photos: CheckInPhotosGetResponse,
};

/* Helpers */

function encodeCheckInUser(user: ?User): CheckInReviewUserGetResponse {
  return !user ? null : {
    id: user.id,
    name: user.name,
    username: user.username,
    avatar: user.avatar,
  };
}

function encodeCheckInPhotos(photos: ?Array<Photo>): CheckInPhotosGetResponse {
  return _.map(photos, (photo: Photo) => {
    return {
      id: photo.id,
      createdAt: photo.createdAt,
      user: encodeCheckInUser(photo.user),
    };
  });
}

function encodeCheckInReviews(reviews: ?Array<Review>): CheckInReviewsGetResponse {
  return _.map(reviews, (review: Review) => {
    return {
      id: review.id,
      amountPaid: review.amountPaid,
      currency: review.currency,
      comment: review.comment,
      foodRating: review.foodRating,
      serviceRating: review.serviceRating,
      environmentRating: review.environmentRating,
      createdAt: review.createdAt,
      user: encodeCheckInUser(review.user),
    };
  });
}

/* Values */

export const CheckInGetRequestSchema = Joi.object().keys({
  id: Joi.string().guid().required(),
});

export function CheckInGetResponseEncodeJson(checkIn: CheckIn): CheckInGetResponse {
  return {
    id: checkIn.id,
    name: checkIn.name,
    address: checkIn.address,
    latitude: checkIn.latitude,
    longitude: checkIn.longitude,
    tz: checkIn.tz,
    publishedAt: checkIn.publishedAt,
    createdAt: checkIn.createdAt,
    userId: checkIn.userId,
    user: encodeCheckInUser(checkIn.user),
    reviews: encodeCheckInReviews(checkIn.reviews),
    photos: encodeCheckInPhotos(checkIn.photos),
  };
}
