const crypto = require('crypto');
const num = crypto.randomBytes(8).toString('hex');
console.log(num);
