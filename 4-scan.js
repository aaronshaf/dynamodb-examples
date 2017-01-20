const { docClient } = require('./common/dynamodb')

docClient
  .scan({
    TableName: 'content-team-members',
    ExclusiveStartKey: { name: 'bp' }
  })
  .promise()
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
