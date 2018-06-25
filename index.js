// content of index.js
const http = require('http')
var CloudKit = require("./cloudkit.js")

var containerConfig = require('./config');

const port = 3000
CloudKit.configure(containerConfig);


var container = CloudKit.getDefaultContainer();

var publicDB = container.publicCloudDatabase;
container.setUpAuth;
function demoPerformQuery() {
    // console.log(publicDB);
    
    publicDB.performQuery({recordType: 'Items'}).then(function(response){
      console.log(response)
    }).catch(function(error){
      console.log(error)
    })
  }
//   https://cdn.apple-cloudkit.com/cloudkit-catalog/#readme/Server-side-CloudKit-with-node-js
// https://icloud.developer.apple.com/dashboard#containers/iCloud.com.commonworldinc.dev.Dice/environments/Production/api-access/
const requestHandler = (request, response) => {
    demoPerformQuery()
    response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})