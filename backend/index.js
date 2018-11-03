const AWS = require('aws-sdk');
const dynamo = new  AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    
    //Response json
    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    });

    switch (event.httpMethod) {
        case 'GET':
            getRecord(event.queryStringParameters)
            break;
        case 'PUT':
            putRecord(event.body)
            break;
        case 'DELETE':
            deleteRecord(event.queryStringParameters)
            break;
        default:
            done(new Error(`Unsupported method "${event.httpMethod}"`));
    }
function putRecord(item) {
    console.log(item);
    var dynamoParams = {
            TableName: process.env.DYNAMO_TABLE,
            Item: JSON.parse(item)
        };
    dynamo.put(dynamoParams, function(err, data) {
        if (err) {
            done(new Error(err));
        } else {
            done();
        }
    });
}
function getRecord(queryParams) {
    var dynamoParams = {
            TableName: process.env.DYNAMO_TABLE
        };
    dynamo.scan(dynamoParams, function(err, data) {
        if (err) {
            done(new Error(err));
        } else {
            done(err,data);
        }
    });
}
function deleteRecord(queryParams) {
    var dynamoParams = {
            TableName: process.env.DYNAMO_TABLE,
            Key: queryParams
        };
    dynamo.delete(dynamoParams, function(err, data) {
        if (err) {
            done(new Error(err));
        } else {
            console.log(data)
            done(err,data);
        }
    });
}
};
