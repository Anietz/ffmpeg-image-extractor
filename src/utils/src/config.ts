import * as dotenv from 'dotenv';
dotenv.config();
const path = require('path');
const rootPath = path.resolve(__dirname, '../../../');

const config = {
  hashSalt: 15,
  jwt: {
    secret: {
      forgetPassword: '',
      verifyEmail: '',
      authTokenVerification: '',
    },
  },
  baseURL: process.env.BASE_URL,
  ROOT_PATH: rootPath,
  APP_NAME: 'Image Extractor from Video',
  APP_ENVIRONMENT: process.env.ENVIRONMENT ?? '',
  PORT: process.env.PORT ?? 8070,
};

export default config;
