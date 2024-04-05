/*
    This file is used to make an API call to the Cloudbeds API.
https://apidog.com/articles/call-rest-api-node-js/#why-use-nodejs-for-calling-rest-apis

    */

const https = require('https');

const options = {
  hostname: 'hotels.cloudbeds.com',
//   path: '/api/v1.1/getHouseAccountList',
  path: '/api/v1.1/getPaymentMethods',
  method: 'GET',
  headers: {
    'x-api-key': 'cbat_06UfnnHdzSwoncUCh7ZOHkLiv02ZqUqc',
  },
};

const getPosts = () => {
  let data = '';

  const request = https.request(options, (response) => {
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
        console.log(chunk)
      data += chunk;
    });

    response.on('end', () => {
        // console.log(Object.keys(data.data[0]));
      console.log(data.length)
               });
  });

  request.on('error', (error) => {
    console.error(error);
  });

  request.end();
};

getPosts();