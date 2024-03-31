//const {log} =require("concle")
const os =require('os');
console.log(os.platform())
console.log(os.arch())
console.log(os,os.userInfo)
//log(os.uptime())
let osDetails ={
    name:os.name(),
    type:os.type(),
    host:os.host()
}
console(osDetails);
//console(osDetails.freeMemory);