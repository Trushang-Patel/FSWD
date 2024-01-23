const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');

class FileMonitor extends EventEmitter {
  constructor(directory) {
    super();
    this.directory = directory;
  }

  startMonitoring() {
    fs.watch(this.directory, (eventType, filename) => {
      const filePath = path.join(this.directory, filename);

      if (eventType === 'rename') {
        if (fs.existsSync(filePath)) {
          this.emit('fileCreated', filePath);
        } else {
          this.emit('fileDeleted', filePath);
        }
      } else if (eventType === 'change') {
        this.emit('fileModified', filePath);
      }
    });

    this.on('error', (err) => {
      console.error(`Error in FileMonitor: ${err.message}`);
    });
  }
}

// Usage example
const directoryToMonitor = 'C:\\SEM-4\\FSWD\\WEEK-4';  // Double backslashes for Windows
const fileMonitor = new FileMonitor(directoryToMonitor);

fileMonitor.on('fileCreated', (filePath) => {
  console.log(`File created: ${filePath}`);
});

fileMonitor.on('fileModified', (filePath) => {
  console.log(`File modified: ${filePath}`);
});

fileMonitor.on('fileDeleted', (filePath) => {
  console.log(`File deleted: ${filePath}`);
});

fileMonitor.on('error', (err) => {
  console.error(`Error in FileMonitor: ${err.message}`);
});

fileMonitor.startMonitoring();
