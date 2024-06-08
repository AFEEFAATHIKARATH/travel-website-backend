const json_server = require("json-server");

// server creation
const travServer = json_server.create();

// create middleware for converting json.js
const middleware = json_server.defaults();

const router = json_server.router("db.json");

// connect server with frontend
const cors = require("cors");

travServer.use(cors());
travServer.use(middleware);
travServer.use(router);

const PORT = 8000;
travServer.listen(PORT, () => {
  console.log(`___travel server started at port number ${PORT}`);
});
