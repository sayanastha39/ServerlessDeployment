'use strict'
// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({ region: "us-east-2"});

exports.handler = async (event, context) => {
    // Create the DynamoDB service object
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-2"});

  let responseBody = "";
  let statusCode = 0;

  const { id } = event.pathParameters;
  const params = {
    TableName: "customer",
    Key: {
      id: id
    }}

  try {
    const data = await documentClient.get(params).promise();
    responseBody = JSON.stringify(data.Item);
    statusCode = 200;
  } catch (err) {
    responseBody = `Unable to get user data`;
    statusCode = 404;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "myHeader": "test"
    },
    body: responseBody
  }
  return response;
}