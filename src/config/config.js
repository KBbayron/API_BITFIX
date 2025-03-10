require('dotenv').config();

const ENV = process.env.NODE_ENV || 'dev'
if (!process.env.BCRYPT_SALTS) {
  throw new Error('Set "BCRYPT_SALTS" as an environment variable')
}
const BCRYPT_SALTS = parseInt(process.env.BCRYPT_SALTS)
if (isNaN(BCRYPT_SALTS)) {
  throw new Error('The "BCRYPT_SALTS" environment variable must be a number')
}

module.exports = {
  ENV,
  IS_PROD: ENV === 'production',
  PORT: process.env.PORT,
  DB_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  BCRYPT_SALTS: process.env.BCRYPT_SALTS,
  WEB_URL: process.env.WEBSITE_URL,
  MAILER_EMAIL: process.env.MAILER_EMAIL,
  MAILER_PASSWORD: process.env.MAILER_PASSWORD
}
