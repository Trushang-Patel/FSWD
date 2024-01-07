const url = require('url')
// Parsing a URL    
const urlstring = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox";
const parsedUrl = url.parse(urlstring, true);
console.log('Protocol:', parsedUrl.protocol);
console.log('Host:', parsedUrl.host);
console.log('Pathname:', parsedUrl.pathname);
console.log('Query Parameters:', parsedUrl.query);

// Building a URL
const builtUrl = url.format({
    protocol: 'https',
    host: 'www.example.com',
    pathname: '/newpath',
    query: { param1: 'value1', param2: 'value2' },
  });
  console.log('Built URL:', builtUrl);

  // Validating a URL
const isValidUrl = url.parse(urlstring).protocol !== null;
console.log('Is Valid URL:', isValidUrl);