const path = require('path')
const fs = require('fs')
const filepath = 'C:/SEM-4/FSWD/WEEK-3/TASK-2/Example/example.txt';
console.log('File Extension:', path.extname(filepath));
console.log('File Name:', path.basename(filepath));
console.log('Directory Path:', path.dirname(filepath));

const normalizedPath = path.normalize(filepath);
console.log('Normalized Path:', normalizedPath);
const resolvedPath = path.resolve(__dirname, 'files', 'example.txt');
console.log('Resolved Path:', resolvedPath);

console.log('Path Exists:', fs.existsSync(filepath));
 console.log('Is a Directory:', fs.statSync(filepath).isDirectory());
 console.log('Is a File:', fs.statSync(filepath).isFile());