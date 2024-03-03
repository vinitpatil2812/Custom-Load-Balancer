const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});

let turn = -1;

const roundRobin = (servers, req, res) => {
    const server = servers[(++turn) % servers.length];
    console.log(server);

    proxy.web(req, res, {target: `http://${server.host}:${server.port}`});
}

module.exports = roundRobin;