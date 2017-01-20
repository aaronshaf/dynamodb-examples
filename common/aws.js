if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const https = require('https')

module.exports = function (endpoint) {
  let options = {}

  if (endpoint) {
    options.endpoint = endpoint
  }

  if (!options.endpoint || !options.endpoint.indexOf('http://') === 0) {
    // See: https://github.com/aws/aws-sdk-js/issues/116
    var agent = new https.Agent()
    agent.maxSockets = 500
    agent.rejectUnauthorized = true
    options = {
      sslEnabled: true,
      httpOptions: { agent }
    }
  }

  return Object.assign({}, options, {
    endpoint,
    sslEnabled: !(options.endpoint && options.endpoint.indexOf('http://') === 0)
  })
}
