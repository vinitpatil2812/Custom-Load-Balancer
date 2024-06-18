
# Load-Balancer (Reverse Proxy)

This repository contains the code for a Node.js-based HTTP load balancer, designed to distribute incoming requests efficiently using two algorithms: Round-Robin and Least Connections. 
**Note:** This project is created for fun and should be used accordingly.

## Features

- **Round-Robin Algorithm**: Distributes requests in a cyclic order across multiple servers.
- **Least Connections Algorithm**: Directs requests to the server with the fewest active connections for optimal load balancing.

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/vinitpatil2812/Custom-Load-Balancer.git
cd load-balancer
npm install
```

## Configuration

Edit the `serverConfig.json` file to specify your server details and load balancing algorithm.

```json
{
  "servers": [
    {"url": "http://localhost:3001"},
    {"url": "http://localhost:3002"}
  ],
  "algorithm": "round-robin"  // or "least-connections"
}
```

## Usage

Start the load balancer server:

```bash
node index.js
```

The load balancer will begin distributing requests according to the specified algorithm.

## Testing

Run the test script to verify the load balancer functionality:

```bash
bash testLoadBalancer.sh
```

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

**Author**: Vinit Patil

Happy load balancing!
