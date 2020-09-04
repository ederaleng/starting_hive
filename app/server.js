const app = require('express')()
const server = require('http').createServer(app);
const cors = require('cors')
app.use(cors());

// routes
app.use(require('./routes'))

server.listen(process.env.PORT, () => {
  console.log(`server run in port:`, process.env.PORT)
});