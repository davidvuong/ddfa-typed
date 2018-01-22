// @flow
import Joi from 'joi';
import type { CheckIn } from '../models/CheckIn';

/* Type definitions */

export type CheckInListRequest = {
  startTime: Date,
  limit: number,
  draftOnly?: ?boolean,
};

export type CheckInListResponse = {
  checkIns: Array<CheckIn>,
  count: number,
};

/* Values */

export const CheckInListRequestSchema = Joi.object().keys({
  startTime: Joi.date().iso().required(),
  limit: Joi.number().max(20).min(1).required(),
  draftOnly: Joi.boolean().allow(null),
});

export function CheckInListResponseEncodeJson(checkIns: Array<CheckIn>, count: number): CheckInListResponse {
  return { checkIns, count };
}
