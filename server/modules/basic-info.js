var request = require('request');

// Retrieve news from Guardian for a specific rep

module.exports.getGovTrack = function(inputPackage, outputPackage, nextCB){

var requestCallback = function(error, response, data){
  data=JSON.parse(data)
  var result = data.objects.filter(function(currentValue){
      if(currentValue.person.bioguideid === inputPackage.rep){
          return true;
      }
      return false
  })
  outputPackage.repInfo = result;
  nextCB();
}
  request('https://www.govtrack.us/api/v2/role?current=true', requestCallback)

};
