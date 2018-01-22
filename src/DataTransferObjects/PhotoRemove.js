// @flow
import Joi from 'joi';

/* Type definitions */

export type PhotoRemoveRequest = {
  id: string,
};

/* Values */

export const PhotoRemoveRequestSchema = Joi.object().keys({ // eslint-disable-line import/prefer-default-export
  id: Joi.string().guid().required(),
});
