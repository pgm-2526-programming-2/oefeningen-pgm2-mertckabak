const express = require("express");
const locationsRouter = require("./routes/locations.routes");
const app = express();

const PORT = 3030;
const HOST = "localhost";

app.use(express.json());
app.use(locationsRouter);

app.listen(PORT, HOST, (error) => {
  if (error) {
    return console.error(error.message);
  }

  console.log(`De server is lopende op http://${HOST}:${PORT}`);
});
