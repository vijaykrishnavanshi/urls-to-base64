# url-to-base64

This is a very simple package with functionality of converting the file dowloaded from url to base64. This abstracts the complexity of actually parsing the reponse in chunks before converting them in to one base64 encoded string.

## Usage

First, install the package using npm:

    npm install url-to-base64 --save

Then, require the package and use it like so:

    const urlToBase64 = require('url-to-base64');
    urlToBase64.convertOnlineHostedFileToBase64("<some-url>", <file-type>)
    <file-type> this is available in urlToBase64.types

## License

Apache 2.0

Note: This is under development and will change/evolve alot internally and externally not suitable to be used in your workflow yet.
