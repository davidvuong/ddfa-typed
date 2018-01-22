// @flow
import Joi from 'joi';
import type { Authentication } from '../Authentication';

/* Type definitions */

export type UserAuthenticateRequest = {
  username: string,
  password: string,
};

export type UserAuthenticateResponse = {
  id: string,
  token: string,
};

/* Values */

export const UserAuthenticateRequestSchema = Joi.object().keys({
  username: Joi.string().trim().lowercase().required(),
  password: Joi.string().required(),
});

export function UserAuthenticateResponseEncodeJson(auth: Authentication): UserAuthenticateResponse {
  return { id: auth.id, token: auth.token };
}
