var request = require('request');

// Retrieve a legislator's legislative sponsorship history from Sunlight Foundation
// Congressional API

module.exports = function(bioguide_id, callback){

  var httpRequestOptions = {
    url: 'https://congress.api.sunlightfoundation.com/bills?sponsor_id__in=' + bioguide_id,
    headers: {
      'X-APIKEY': process.env.SUNLIGHT_API,
    }
  };

  request(httpRequestOptions, callback);
};
