'use strict';

const http = require('http'),
    cluster = require('cluster'),
    os = require('os').cpus().length;

if (cluster.isMaster) {
    for (let i = 0; i < os; i++) {
        cluster.fork();
        console.log(`The Worker number: ${i + 1} is alive`);
    }
    cluster.on('exit', (worker) => {
        console.log(`The Worker number: ${worker.id} has died`);
        console.log(`Starting new worker`);
        cluster.fork();
    });
} else {
    http.createServer((sol, res) => {
        var r = 0;
        for (let i = 0; i<= 100000; i++) {
            r += i;
        }
        res.end('Hi, we are harnessing the power of clusters: ' + process.pid);
        console.log('Hi, we are harnessing the power of clusters: ' + process.pid);
    }).listen(3000, () => console.log('The server is running on the port:3000'));
    console.log(`The Worker number: ${cluster.worker.id} is running`);
}
