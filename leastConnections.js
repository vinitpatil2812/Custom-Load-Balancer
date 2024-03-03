const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});


const leastConnections = (servers, req, res) => {
    servers.sort((a, b) => a.connections - b.connections);

    const server = servers[0];
    server.connections++;

    console.log(server);

    proxy.web(req, res, {target: `http://${server.host}:${server.port}`});

    res.on("finish", () => {
        server.connections--;
    });
}

module.exports = leastConnections;