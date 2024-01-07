const fs = require('fs');
const path = require('path');

// Reading a directory
const directoryPath = './Example';
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Displaying file details
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);
    console.log(`${file} - Size: ${stats.size} bytes, Type: ${stats.isFile() ? 'File' : 'Directory'}`);
  });

  // Copying a file
  const sourceFile = path.join(directoryPath, 'example.txt');
  const destinationFile = path.join(directoryPath, 'example-copy.txt');
  fs.copyFileSync(sourceFile, destinationFile);
  console.log('File copied successfully.');

  // Renaming a file
  const oldFileName = path.join(directoryPath, 'example-copy.txt');
  const newFileName = path.join(directoryPath, 'renamed-file.txt');
  fs.renameSync(oldFileName, newFileName);
  console.log('File renamed successfully.');

  // Deleting a file
  const fileToDelete = path.join(directoryPath, 'renamed-file.txt');
  fs.unlinkSync(fileToDelete);
  console.log('File deleted successfully.');

  // Creating a new directory and moving files into it
  const newDirectoryName = path.join(directoryPath, 'new-directory');
  fs.mkdirSync(newDirectoryName);
   const filesToMove = ['index.html', 'style.css'];
   filesToMove.forEach((file) => {
     const sourcePath = path.join(directoryPath, file);
     const destinationPath = path.join(newDirectoryName, file);
     fs.renameSync(sourcePath, destinationPath);
   });
   console.log('Files moved to the new directory.');
});
