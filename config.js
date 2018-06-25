var fetch = require('node-fetch');
module.exports = {

    services: {
        fetch: fetch,
        logger: console
      },
      containers: [{
        // Change this to a container identifier that you own.
        containerIdentifier: 'iCloud.com.commonworldinc.dev.Dice',
        environment: 'production',
        serverToServerKeyAuth: {
          // This is the key ID you generated in CloudKit Dashboard.
          keyID: '8fc18e29d2671b418fde5b24dbda4819d31ceff416e6c19f7f03cc553da39ff3',
    
          // This should reference the private key file that you used to
          // generate the above key ID.
          privateKeyFile: __dirname + '/eckey.pem'
    
        }
      }]
  };

  