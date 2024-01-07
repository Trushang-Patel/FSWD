const util = require('util');
const fs = require('fs');

// Custom error objects
class CustomError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}
  const myError = new CustomError(404,"Page Not Found");
  console.log('Custom Error:', myError);



// Logging objects with util.inspect()
const objToInspect = { name: 'John', age: 30, address: { city: 'Example City', zip: '12345' } };
console.log('Inspected Object:', util.inspect(objToInspect, { depth: null }));

// Error handling with util.promisify()
const readFileAsync = util.promisify(fs.readFile);

async function readAndHandleFile(filePath) {
  try {
    const content = await readFileAsync(filePath, 'utf8');
    console.log('File Content:', content);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('File not found:', error.message);
    } else {
      console.error('Error reading file:', error);
    }
  }
}

// Example usage
readAndHandleFile('./example.txt');
