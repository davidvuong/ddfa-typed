// @flow
import type { User } from './User';

export type Review = {
  id: string,
  checkInId: string,
  userId: string,
  user?: User,
  amountPaid: number,
  currency: string,
  comment?: ?string,
  foodRating?: ?number,
  environmentRating?: ?number,
  serviceRating?: ?number,
  createdAt: number,
};
