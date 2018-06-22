var fetch = require('node-fetch');
module.exports = {
    // Replace this with a container that you own.
    // containerIdentifier:'iCloud.com.commonworldinc.dev.Dice',
    // apiTokenAuth: {
    //     apiToken: '14a06cef976e5a0329150546ee3f4fb6867e8d9b0c99211f01b7775c07615c4c'
    // },
    // environment: 'development'

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
          keyID: '14a06cef976e5a0329150546ee3f4fb6867e8d9b0c99211f01b7775c07615c4c',
    
          // This should reference the private key file that you used to
          // generate the above key ID.
          privateKeyFile: __dirname + '/eckey.pem'
    
        }
      }]
  };

  