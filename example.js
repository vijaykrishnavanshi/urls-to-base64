// Change './index' to 'is-null-or-empty' if you use this code outside of this package
var { convertOnlineHostedFileToBase64, types } = require('./index');

console.log(convertOnlineHostedFileToBase64("http://www.africau.edu/images/default/sample.pdf", types.pdf)); // content in base64
