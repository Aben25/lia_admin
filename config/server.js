module.exports = ({ env }) => ({
  url: env('AMPLIFY_URL'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
});