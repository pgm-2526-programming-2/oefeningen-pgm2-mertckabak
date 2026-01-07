/**
 * @file This is the main file where we will start our server
 */

const express = require("express");
const locationsRouter = require("./routes/locations.routes");
const app = express();

/**
 * @type {number}
 * @description Port of our server
 */
const PORT = 3030;
/**
 * @type {string}
 * @description Here you can set your base url of your API
 */
const HOST = "localhost";

/**
 * This is middleware
 */
app.use(express.json());
/**
 * This is middleware that adds several routes of locations in our API
 */
app.use(locationsRouter);

/**
 * This starts our server
 */
app.listen(PORT, HOST, (err) => {
  if (err) {
    return console.error(err.message);
  }

  console.log(`De server is lopende op: http://${HOST}:${PORT}`);
});
