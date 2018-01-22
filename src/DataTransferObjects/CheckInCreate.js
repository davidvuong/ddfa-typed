// @flow
import Joi from 'joi';
import type { CheckIn } from '../models/CheckIn';

/* Type definitions */

export type CheckInCreateRequest = {
  latitude: number,
  longitude: number,
  address: string,
  name: string,
  googlePlaceId?: ?string,
};

export type CheckInCreateResponse = {
  id: string,
};

/* Values */

export const CheckInCreateRequestSchema = Joi.object().keys({
  latitude: Joi.number().max(90).min(-90).required(),
  longitude: Joi.number().max(180).min(-180).required(),
  address: Joi.string().max(255).trim().required(),
  name: Joi.string().max(255).trim().required(),
  googlePlaceId: Joi.string().max(255).allow(null),
});

export function CheckInCreateResponseEncodeJson(checkIn: CheckIn): CheckInCreateResponse {
  return { id: checkIn.id };
}
