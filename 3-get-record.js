const { docClient } = require('./common/dynamodb')

docClient
  .get({ TableName: 'content-team-members', Key: { name: 'bp' } })
  .promise()
  .then((result) => {
    console.log(result.Item)
  })
  .catch(error => {
    console.error(error)
  })
