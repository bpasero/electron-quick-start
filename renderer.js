var cp = require('child_process');

var child = cp.fork(['./asar.js']);

child.on('exit', (code, signal) => console.log("CHILD EXIT: " + code + " / " + signal));