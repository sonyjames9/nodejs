const path = require('path');

var path_obj = path.parse(__filename);

console.log(path_obj);

const os = require('os')
const fs = require('fs')

let total_mem = os.totalmem()
let free_mem = os.freemem()

console.log('Total memory: ' + total_mem)
console.log('Free memory: ' + free_mem)

console.log(`total memory: ${total_mem}`);
console.log(`Free memory: ${free_mem}`);

const fs_files = fs.readdirSync('./');
console.log(fs_files);

fs.readdir('./', function (err, files) {
  console.log('\n')
  if (err) console.log('Error: ' + err)
  else console.log('Result', files)
    
})

const Logger = require('./logger')
const logger = new Logger();
//Register a listener
logger.on('message Logged', function () {
  console.log('Listener called');
})


//Register a listener
logger.on("message Logged args", function (args) {
  console.log("Listener called args", args);
});


//Register a listener
logger.on("message Logged args arrow fn", (args) => {
  console.log("Listener called args", args);
});


logger.log('message')