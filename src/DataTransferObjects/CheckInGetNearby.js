// @flow
import Joi from 'joi';
import type { CheckIn } from '../models/CheckIn';

/* Type definitions */

export type CheckInGetNearbyRequest = {
  latitude: number,
  longitude: number,
};

export type CheckInGetNearbyResponse = {
  checkIns: Array<CheckIn>,
};

/* Values */

export const CheckInGetNearbyRequestSchema = Joi.object().keys({
  latitude: Joi.number().max(90).min(-90).required(),
  longitude: Joi.number().max(180).min(-180).required(),
});

export function CheckInGetNearbyResponseEncodeJson(checkIns: Array<CheckIn>): CheckInGetNearbyResponse {
  return { checkIns };
}
