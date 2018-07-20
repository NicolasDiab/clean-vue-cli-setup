'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// Remember to use '"quotes"' for string values

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"https://www.anapioficeandfire.com/api/"',
  LOGGER: {
    OPTIONS: {
      // required ['debug', 'info', 'warn', 'error', 'fatal']
      logLevel : '"debug"',
      stringifyArguments : false,
      showLogLevel : true,
      showMethodName : true,
      separator: '"|"',
      showConsoleColors: true
    }
  }
})
