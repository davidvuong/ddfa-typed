// @flow
import type { User } from './User';

export type Photo = {
  id: string,
  userId: string,
  user?: User,
  checkInId: string,
  createdAt: number,
};
