const axios = require('axios');

axios.post(url, {
    myValue: "somevalue"
  }, {
    headers: {
        Cookie: "XDEBUG_SESSION=PHPSTORM;"
    }
  }).then(function(result) {
    console.log('result is here');
    console.log(result.data);
  }).catch(function(err) {
    console.error("Failed to get answer from php backend.", err.message);
  });


  // In plain php, you'll need this to parse it:
  // file_get_contents('php://input');