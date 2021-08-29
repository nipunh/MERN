const { Console } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  res.end();
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
