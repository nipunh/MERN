const { Console } = require("console");
const http = require("http");

const todos = [
  { id: 1, text: "todo 1" },
  { id: 2, text: "todo 2" },
  { id: 3, text: "todo 3" },
];

const server = http.createServer((req, res) => {
  // res.setHeader('Content-Type', 'text/plain')
  // res.write("Hello");

  //   res.setHeader("Content-Type", "text/html");
  //   res.write("<h1>Hello</h1>");
  //   res.write("<h1>I am Nipun Hedaoo</h1>");

  //   Non specific content types
  //   res.setHeader("X-Powered-By", "Node.js");
  //   res.write("<h1>Hello</h1>");
  //   res.write("<h1>I am Nipun Hedaoo</h1>");

  //   res.setHeader("Content-Type", "application/json");
  //   res.write(JSON.stringify({
  //     success: true,
  //     data: todos,
  //   }));

  //   res.statusCode = 404;
  //   res.setHeader("Content-Type", "application/json");
  //   res.write(
  //     JSON.stringify({
  //       success: false,
  //       data: null,
  //       error : 'Not Found'
  //     })
  //   );

  res.writeHead(400, {
    "Content-Type": "application/json",
  });
  res.write(
    JSON.stringify({
      success: false,
      data: null,
      error: "Not Found",
    })
  );

  res.end();
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
