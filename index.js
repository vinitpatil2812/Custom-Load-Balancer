const http = require("http");

const serverConfig = require("./serverConfig").servers;

const roundRobin = require("./roundRobin");

const servers = serverConfig.map((server) => ({
    ...server
}));

const loadBalancingAlgorithm = "roundRobin";

const server = http.createServer((req, res) => {
    if(loadBalancingAlgorithm === "roundRobin") {
        roundRobin(servers, req, res);
    }
    else {
        res.writeHead(500)
        res.end("Load balancing algorithm not supported");
    }
});

server.listen(3000, () => {
    console.log("Load balancer is running on port 3000");
});