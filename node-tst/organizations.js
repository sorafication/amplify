// Load the SDK for JavaScript
var AWS = require('aws-sdk');
// Set the Region
//AWS.config.update({region: 'us-east-1'});

var credentials = new AWS.SharedIniFileCredentials({profile: 'cbc-master'});
AWS.config.credentials = credentials;

var organizations = new AWS.Organizations({region: 'us-east-1'});


var j = 0;
listAllAccounts = (params) => {

organizations.listAccounts(params, function (err, data) {
    var params = {
        //NextToken: 'abc'
     };
  if (err) console.log(err, err.stack); // an error occurred
  else {    console.log("Saved all Accounts");
 // console.log(params.NextToken)
            var data = data


            for (var i=0, max=data.Accounts.length; i < max; i++) {
                console.log("Count: " + j + " ID:" + data.Accounts[i].Id +" is: " +  data.Accounts[i].Name)
              all_data.push(data.Accounts[i].Name);
              console.log("ALL DATA : " + all_data)
                j += 1;

        }
           //console.log(data.Accounts)


           if (data.NextToken) {
               console.log("There is more")
              // j+= i;
            params.NextToken = data.NextToken;
            listAllAccounts(params)
        }


           // console.log(data.NextToken)
           // console.log(data.Accounts[1].Id)
        }        // successful response
})
//return all_data;
};

//var all_data = ["DUMDUM"];

listAllAccounts()
//console.log("All Data: ")
//console.log("ALL DATA" + all_data)
