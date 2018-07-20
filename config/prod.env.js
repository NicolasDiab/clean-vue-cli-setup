'use strict'

// Remember to use '"quotes"' for string values

module.exports = {
  NODE_ENV: '"production"',
  BASE_URL: '"https://www.anapioficeandfire.com/api/"',
  LOGGER: {
    OPTIONS: {
      // required ['debug', 'info', 'warn', 'error', 'fatal']
      logLevel : '"error"',
      stringifyArguments : false,
      showLogLevel : true,
      showMethodName : true,
      separator: '"|"',
      showConsoleColors: true
    }
  }
}
