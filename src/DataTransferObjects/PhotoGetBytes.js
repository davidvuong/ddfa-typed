// @flow
import Joi from 'joi';

/* Type definitions */

export type PhotoGetBytesRequest = {
  id: string,
  width?: ?number,
};

/* Values */

export const PhotoGetBytesRequestSchema = Joi.object().keys({ // eslint-disable-line import/prefer-default-export
  id: Joi.string().guid().required(),
  width: Joi.number().min(0).max(1024).allow(null),
});
