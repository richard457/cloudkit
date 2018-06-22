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
    container.setUpAuth()
        .then(function (userInfo) {
            // The userInfo is that of the user who created the key in CloudKit Dashboard.
            // If this user has permission to write a record of type Item to the
            // public database, the following call will succeed.
            // return database.saveRecords({ recordType: 'Item' });
            publicDB.performQuery({ recordType: 'Roll' }).then(function (response) {
                console.log(response)
            }).catch(function (error) {
                console.log(error)
            })

        }).then(function (response) {
            var savedRecord = response.records[0];
            console.log('Record name:', savedRecord.recordName);
            process.exit(0);
        }).catch(function (error) {
            // Handle the error.
            process.exit(1);
        });

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