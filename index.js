const request = require('request');
const types = require('./types');
// Function Definition
const convertOnlineHostedFileToBase64 = (url, type) => {
    if (types.values.indexOf(type) > -1) {
        throw new error("Not supported type");
    }
    return new Promise((resolve, reject) => {
        const optionsStart = {
            uri: url,
            method: "GET",
            encoding: null,
            headers: {
                "Content-type": types[type],
            }
        };
        request(optionsStart, (error, response, body) => {
            if (error) {
                reject(false);
            } else if (response.statusCode === 200) {
                resolve(Buffer.from(body).toString("base64"));
            } else {
                reject(false);
            }
        });
    });
}

// Make the main function available to other packages that require this package
module.exports = {
    convertOnlineHostedFileToBase64,
    types,
};
