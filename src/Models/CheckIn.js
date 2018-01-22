// @flow
import type { User } from './User';
import type { Review } from './Review';
import type { Photo } from './Photo';

export type CheckIn = {
  id: string,
  googlePlaceId?: ?string,
  userId: string,
  user?: User,
  latitude: number,
  longitude: number,
  address: string,
  name: string,
  tz: string,
  publishedAt?: ?number,
  createdAt: number,

  distance?: number,
  reviews?: Array<Review>,
  photos?: Array<Photo>,
};
