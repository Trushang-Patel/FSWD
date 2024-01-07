const os = require('os');

console.log(`Hostname : ${os.hostname}`)
console.log(`CPU Architecture : ${os.arch()}`);
console.log(`Total Memory(GB) : ${os.totalmem/(1024*1024*1024)}`)
console.log(`Operating System Platform: ${os.platform}`)
console.log(`Uptime(second): ${os.uptime}`)
console.log(`Operating System type:${os.type}`)
//console.log(`CPU : ${os.cpus}`)

setInterval(() => {
    console.log('CPU Usage:', os.cpus());
    console.log('Free Memory (bytes):', os.freemem());
  }, 5000);