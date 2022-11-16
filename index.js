require('dotenv-vault-core').config()
console.log(process.env) // for debugging purposes. remove when ready.

const PORT = process.env.PORT || 80
const http = require('http')
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end(`Hello ${process.env.HELLO}`);
});

server.listen(PORT, () => {
  console.log(`Server running on port:${PORT}/`);
});
