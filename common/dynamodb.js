const AWS = require('aws-sdk')
const aws = require('./aws')

const options = aws(process.env.DYNAMO_ENDPOINT)

exports.dynamo = new AWS.DynamoDB(options)
exports.docClient = new AWS.DynamoDB.DocumentClient(options)
