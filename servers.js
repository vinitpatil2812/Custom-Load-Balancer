const http = require("http");
const serverConfig = require("./serverConfig.json").servers;

const createServer = (host, port) => {
    http.createServer((req, res) => {
        res.status(200).end(`Server response from port: ${port}`);
    }).listen(port, host, () => {
        console.log(`Server running at http://${host}:${port}`);
    });
}

serverConfig.forEach((server) => {
    createServer(server.host, server.port);
});