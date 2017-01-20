const { docClient } = require('../common/dynamodb')
const ensureTable = require('../common/ensure-table')

Promise.resolve().then(() => {
  return ensureTable({
    TableName: 'content-team-members',
    KeySchema: [
      { AttributeName: 'name', KeyType: 'HASH' }
    ],
    AttributeDefinitions: [
      { AttributeName: 'name', AttributeType: 'S' }
    ]
  })
})
