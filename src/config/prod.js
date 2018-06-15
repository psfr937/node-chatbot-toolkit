/* @flow */
const merge = require('lodash/fp/merge');

const defaultConfig = require('./default');

module.exports =merge(defaultConfig,{
  listenTo: process.env.LISTEN_TO || 'localhost',
  host: process.env.NODE_HOST || '128.199.140.120', // Define your host from 'package.json'
  port: process.env.PORT || 8080,
  publicPort: process.env.PUBLIC_PORT || 80,
  sslEnabled: process.env.SSL_ENABLED || true,
  passportStrategy: {
    facebook: require('./passportStrategy/facebook/credential').production,
    google: require('./passportStrategy/google/credential').production,
  }
});
