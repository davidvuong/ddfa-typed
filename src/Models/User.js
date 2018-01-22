// @flow

export type User = {
  id: string,
  name?: ?string,
  username: string,
  password: string,
  avatar?: ?string,
  token: string,
  isAdmin: boolean,
  createdAt: number,
};
