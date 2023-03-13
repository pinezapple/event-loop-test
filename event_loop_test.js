const fs = require('fs');
const { request } = require('http');

process.stdout.write('\n\n-------------------START----------------\n\n');
process.nextTick(() => {
    process.stdout.write('NT1: nextTick()\n')
})

fs.readFile('read.txt', (err, res) => {
    process.stdout.write('1: THREADPOOL POLLING \n')
})

setImmediate(() => {
    process.stdout.write('3: SET IMMEDIATE\n')
})

setTimeout(() => {
    process.stdout.write('4: TIMEOUT\n')
}, 0)


function fibonacci(x) {
    return x
} 

process.stdout.write('5: Fibonacci(20)' +  fibonacci(20) + ' ASYNC CALLBACK\n');


process.nextTick(() => {
    process.stdout.write('NT2: nextTick()\n')
})