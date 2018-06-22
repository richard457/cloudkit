// content of index.js
const http = require('http')
var CloudKit = require("./cloudkit.js")
var fetch = require('node-fetch');
var containerConfig = require('./config');

const port = 3000
CloudKit.configure({
    // services: {
    //     fetch: fetch
    // },
    containers: [containerConfig]
});
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
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