var path = require('path');
var archivehelpers = require('../helpers/archive-helpers');
var httphelpers = require('./http-helpers.js');
// require more modules/folders here!


exports.handleRequest = function (request, response) {

  response.writeHead(200, httphelpers.headers);
  var checkArchives = function(url){

    httphelpers.serveHTML("/" + url,response);
    response.end(JSON.stringify(url));

    // if(archivehelpers.paths.isUrlInList()){
    //   if (archivehelpers.paths.isUrlArchived()){
    //     //serve page
    //     httphelpers.serveHMTL(url, response);
    //   } else {
    //     //serves waitPage
    //     httphelpers.serveWaitPage(response);
    //   }
    // } else {
    //   archivehelpers.addUrlToList(url);
    //   httphelpers.serveWaitPage(response);
    //   //add to list
    //   //serve 'still loading robot embalming' page
    // }
  };
  var url;
  var temp = "";
  request.on('data', function(data) {
    temp += data;
  });
  request.on('end', function() {
    // url = JSON.parse(temp);
    url = temp;
    console.log(temp, url);
    // response.end(temp);
    checkArchives(url);
  });




  // if (response && response.write)
  //   response.write();
};