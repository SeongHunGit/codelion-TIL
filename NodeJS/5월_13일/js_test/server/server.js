const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<p>Hello World~!!!</p>");
  })
  .listen(3000, () => {
    console.log("3000번 포트 서버 접속 완료~!!");
  });
