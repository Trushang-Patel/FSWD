const fs = require('fs');

// Reading a text file and converting its content to a buffer
const textContent = 'Hello, this is a text file.';
const filePath = './textFile.txt';
fs.writeFileSync(filePath, textContent);
const buffer = fs.readFileSync(filePath);
console.log("Buffer: ",buffer)
console.log('Buffer in utf8:', buffer.toString('utf8'));

// Manipulating the buffer
const slicedBuffer = buffer.slice(0, 5);
console.log('Sliced Buffer:', slicedBuffer.toString());

const concatenatedBuffer = Buffer.concat([buffer, Buffer.from(' Appended text.')]);
console.log('Concatenated Buffer:', concatenatedBuffer.toString());

// Encoding and Decoding with buffers
const utf8Encoded = buffer.toString('utf8');
console.log('UTF-8 Encoded:', utf8Encoded);

const base64Encoded = buffer.toString('base64');
console.log('Base64 Encoded:', base64Encoded);

const base64Decoded = Buffer.from(base64Encoded, 'base64');
console.log('Base64 Decoded:', base64Decoded.toString('utf8'));
