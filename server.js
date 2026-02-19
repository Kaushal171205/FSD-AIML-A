// Write a JS program to create a HTTP server using Node.js

import http from "http";
import os from "os";
const server = http.createServer((req, res) => {
    const url = req.url;
    if(url=='/' && req.method=='GET'){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hello World\n");
    }else if(url=='/system' && req.method=='GET'){
        res.statusCode = 200;
        const data = {
            platform : os.platform(),
            cpu : os.cpus(),
            Arch : os.arch(),
            freeMemory : os.freemem(),
            totalMemory : os.totalmem(),

        }
        res.end(JSON.stringify(data));
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/\n");
});