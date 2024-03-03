const http = require("http");

const serverConfig = require("./serverConfig").servers;

const roundRobin = require("./roundRobin");
const leastConnections = require("./leastConnections");

const servers = serverConfig.map((server) => ({
    ...server,
    connections: 0
}));

const loadBalancingAlgorithm = "roundRobin";
// const loadBalancingAlgorithm = "leastConnections";

const server = http.createServer((req, res) => {
    if(loadBalancingAlgorithm === "roundRobin") {
        roundRobin(servers, req, res);
    }
    else if(loadBalancingAlgorithm === "leastConnections") {
        leastConnections(servers, req, res);
    }
    else {
        res.writeHead(500)
        res.end("Load balancing algorithm not supported");
    }
});

server.listen(3000, () => {
    console.log("Load balancer is running on port 3000");
});