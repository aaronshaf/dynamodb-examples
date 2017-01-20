const { dynamo } = require('./dynamodb')
const color = require('cli-color')

module.exports = function (params) {
  if (!params.ProvisionedThroughput) {
    params.ProvisionedThroughput = {
      ReadCapacityUnits: 3,
      WriteCapacityUnits: 3
    }
  }
  if (params.GlobalSecondaryIndexes) {
    params.GlobalSecondaryIndexes = params.GlobalSecondaryIndexes.map((index) => {
      if (!index.ProvisionedThroughput) {
        index.ProvisionedThroughput = {
          ReadCapacityUnits: 3,
          WriteCapacityUnits: 3
        }
      }
      return index
    })
  }
  return dynamo.describeTable({TableName: params.TableName}).promise()
  .then((data) => {
    console.log(color.green(`✔ ${params.TableName} table exists`))
  })
  .catch((error) => {
    if (
      error.message === 'Cannot do operations on a non-existent table' ||
      error.message.includes('Requested resource not found')
    ) {
      return dynamo.createTable(params).promise()
      .then((result) => {
        console.log(color.blue(`✔ ${params.TableName} table created`))
      })
      .catch((error) => {
        console.log(color.red(`✖ error creating ${params.TableName} table`), error)
        process.exit(1)
      })
    } else {
      console.log(color.red(`✖ error creating ${params.TableName} table`), error)
      process.exit(1)
    }
  })
}
