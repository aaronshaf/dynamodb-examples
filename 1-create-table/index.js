const { docClient } = require('../common/dynamodb')
const ensureTable = require('../common/ensure-table')

Promise.resolve().then(() => {
  return ensureTable({
    TableName: '',
    KeySchema: [
      { AttributeName: 'id', KeyType: 'HASH' }
    ],
    AttributeDefinitions: [
      { AttributeName: 'id', AttributeType: 'S' },
      { AttributeName: 'path', AttributeType: 'S' }
    ],
    GlobalSecondaryIndexes: [
      {
        IndexName: 'path',
        KeySchema: [
          { AttributeName: 'path', KeyType: 'HASH' }
        ],
        Projection: { ProjectionType: 'ALL' }
      }
    ]
  })
})
