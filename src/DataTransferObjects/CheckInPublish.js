// @flow
import Joi from 'joi';

/* Type definitions */

export type CheckInPublishRequest = {
  id: string,
};

export type CheckInPublishResponse = {
  id: string,
};

/* Values */

export const CheckInPublishRequestSchema = Joi.object().keys({
  id: Joi.string().guid().required(),
});

export function CheckInPublishResponseEncodeJson(id: string): CheckInPublishResponse {
  return { id };
}
