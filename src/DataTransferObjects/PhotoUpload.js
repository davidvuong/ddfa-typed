// @flow
import _ from 'lodash';
import Joi from 'joi';
import type { Photo } from '../models/Photo';

/* Type definitions */

export type PhotoUploadRequest = {
  checkInId: string,
  photos: Array<{| // built and provided by @multer.
    fieldname?: ?string,
    originalname?: ?string,
    encoding?: ?string,
    mimetype?: ?string,
    size?: ?number,
    buffer: Buffer,
  |}>
};

export type PhotoUploadResponse = {
  photos: Array<string>,
};

/* Values */

export const PhotoUploadRequestSchema = Joi.object().keys({
  checkInId: Joi.string().guid().required(),
  photos: Joi.array().items(Joi.object().keys({
    fieldname: Joi.string(),
    originalname: Joi.string(),
    encoding: Joi.string(),
    mimetype: Joi.string(),
    size: Joi.number().min(0),
    buffer: Joi.binary().required(),
  }))
    .min(1)
    .required(),
});

export function PhotoUploadResponseEncodeJson(photos: Array<Photo>): PhotoUploadResponse {
  return {
    photos: _.map(photos, (photo: Photo) => { return photo.id; }),
  };
}
