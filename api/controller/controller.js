/*class linkedinController {
    
// This sample code will make a request to LinkedIn's API to retrieve and print out some
// basic profile information for the user whose access token you provide.

const https = require('https');

// Replace with access token for the r_liteprofile permission
const accessToken = 'YOUR_ACCESS_TOKEN';
const options = {
  host: 'api.linkedin.com',
  path: '/v2/me',
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'cache-control': 'no-cache',
    'X-Restli-Protocol-Version': '2.0.0'
  }
};

const profileRequest = https.request(options, function(res) {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const profileData = JSON.parse(data);
    console.log(JSON.stringify(profileData, 0, 2));
  });
});
profileRequest.end();


}*/
exports.getData = function(req, res) {
    // This sample code will make a request to LinkedIn's API to retrieve and print out some
// basic profile information for the user whose access token you provide.

const https = require('https');

// Replace with access token for the r_liteprofile permission
const accessToken = 'AQTtxli3hEPlKo2sOI7BdLBbmjoWxDltJW-xj0RH_mwgmdk_PUBmBaaHTxXrIn064U1Nd4swvsw9qefOzKb0aXuRdymdNjhNb1EVs00I53SoXIPB3UvdFZUwEOVdsFawzWabrv4UXKJIU_Cr9OtlD4gYo-OYh4I1_tacTYplfT2esh647NxibWS-7qbXHQ';
const options = {
  host: 'api.linkedin.com',
  path: '/v2/me',
  method: 'GET',
  headers: {
    'cache-control': 'no-cache',
    'X-Restli-Protocol-Version': '2.0.0'
  }
};

// get the auth header
options.headers.Authorization=req.headers.authorization

const profileRequest = https.request(options, function(ressult) {
  let data = '';
  ressult.on('data', (chunk) => {
    data += chunk;
  });

  ressult.on('end', () => {
    const profileData = JSON.parse(data);
    res.json(profileData)
    console.log(JSON.stringify(profileData, 0, 2));
  });
});
profileRequest.end();
}

exports.getAccessToken = function(req, res) {
    const https = require('https');

const options = {
  host: 'www.linkedin.com',
  path: 'oauth/v2/accessToken',
  method: 'POST',
  headers: {
    'Content-Type':'application/x-www-form-urlencoded',
    'cache-control': 'no-cache',
    'X-Restli-Protocol-Version': '2.0.0'
  }
};

var data = req.body

const accessToken = https.request(options, function(ressult) {

  ressult.on('data', (chunk) => {
    data += chunk;
  });

  ressult.on('end', () => {
    const tokenData = JSON.parse(data);
    res.json(tokenData)
    console.log(JSON.stringify(profileData, 0, 2));
  });
});
accessToken.end();
}
