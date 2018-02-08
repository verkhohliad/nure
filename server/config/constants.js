export const SERVER_CONFIG = {
  MONGO_URL: 'mongodb://localhost:27017',
  DB_NAME: 'nure',
  JWT_SECRET: 'ihorek',
  SALT_ROUNDS: 7,
  HOST_URL: 'http://localhost:8082'
};

export const HEADER_ITEMS = {
  USER_TOKEN: 'X-User-Token'
};

export const COLLECTION_NAMES = {
  USERS: 'users',

};

export const ERROR_MESSAGES = {
  PARAM_IS_REQUIRED: param => `${param} is required`,

};
