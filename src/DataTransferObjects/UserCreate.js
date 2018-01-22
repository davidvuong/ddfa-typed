// @flow
import Joi from 'joi';
import type { User } from '../models/User';

/* Type definitions */

export type UserCreateRequest = {
  username: string,
  password: string,
  name?: ?string,
};

export type UserCreateResponse = {
  id: string,
  token: string,
};

/* Values */

export const UserCreateRequestSchema = Joi.object().keys({
  username: Joi
    .string()
    .alphanum()
    .lowercase()
    .trim()
    .min(3)
    .max(64)
    .required(),
  password: Joi.string().min(6).max(255).required(),
  name: Joi.string().min(3).max(255).allow(null),
});

export function UserCreateResponseEncodeJson(user: User): UserCreateResponse {
  return { id: user.id, token: user.token };
}
