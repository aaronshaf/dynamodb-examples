const { docClient } = require('../common/dynamodb')

docClient
  .scan({
    TableName: 'content-team-members',
    FilterExpression: '#awesomenessLevel = :awesomenessLevelValue',
    ExpressionAttributeNames: {
      '#awesomenessLevel': 'awesomenessLevel'
    },
    ExpressionAttributeValues: {
      ':awesomenessLevelValue': 10
    }
  })
  .promise()
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
