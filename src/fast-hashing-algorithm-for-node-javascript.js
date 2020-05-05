const { createHash } = require('crypto');
const hashData = (data) => createHash('sha1').update(data).digest('base64');
