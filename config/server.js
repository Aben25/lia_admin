module.exports = ({ env }) => ({
  url: env('AMPLIFY_URL'),
  host: '0.0.0.0',
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});