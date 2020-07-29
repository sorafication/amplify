// Load the SDK for JavaScript
var AWS = require('aws-sdk');
// Set the Region
AWS.config.update({region: 'eu-central-1'});

var credentials = new AWS.SharedIniFileCredentials({profile: 'amplify-oki'});
AWS.config.credentials = credentials;



var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

var params = {
    TableName: 'Comments-ifdtxan4k5fglip5ynnopk6bky-dev',
 //   Key: {'id': '4de8a026-4599-465a-ac76-9259b4adf1fc'}
   };


   async function getAllDynamoDBItems(){
    try {
        var result = await docClient.scan(params).promise()
        console.log(JSON.stringify(result))
    } catch (error) {
        console.error(error);
    }
}

getAllDynamoDBItems()

//GET EXAMPLE
/*docClient.get(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.Item);
    }
  });
*/
  //SCAN
