const { docClient } = require('./common/dynamodb')

docClient
  .query({
    TableName: 'content-team-members',
    KeyConditionExpression: '#name = :nameValue',
    ExpressionAttributeNames: {
      '#name': 'name'
    },
    ExpressionAttributeValues: {
      ':nameValue': 'dan'
    }
  })
  .promise()
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
