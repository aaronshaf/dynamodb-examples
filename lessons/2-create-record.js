const { docClient } = require('../common/dynamodb')

docClient
  .put({
    TableName: 'content-team-members',
    Item: { name: 'dan', awesomenessLevel: 10 }
  })
  .promise()
  .then((error, data) => {
    console.log(error, data)
  })
  .catch((error) => {
    console.error(error)
  })
