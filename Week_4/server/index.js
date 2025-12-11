const express = require("express");
const bodyParser = require("body-parser");
const myServer = express();
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const HOST = "localhost";

// This tells Express to parse incoming requests with JSON payloads (e.g., from POST/PUT)
myServer.use(bodyParser.json());

function getContentFromFile(fileNameAndExtension) {
  const fileContentAsString = fs.readFileSync(
    path.join(__dirname, fileNameAndExtension),
    "utf8"
  );

  return JSON.parse(fileContentAsString);
}

function getCurrentTime() {
  const now = new Date();
  return `${now.getUTCHours() + 1}:${now.getUTCMinutes()}`;
}

myServer.get("/api", (request, response) => {
  // Request Body is leeg omdat Express geen body aanvaard in GET verzoek.
  console.log("Verzoek op de server!");
  response.status(200);
  // Je kan maar 1 iets terugsturen. "send" voor tekst, "json" voor JSON.
  // response.send(`De tijd op de server is: ${getCurrentTime()}`);
  response.json({
    name: "API Test!",
    requestTime: getCurrentTime(),
  });
});

// Maak een /api/recipes endpoint! Geef hier alle recepten terug!
myServer.get("/api/recipes", (request, response) => {
  res.json(getContentFromFile("recipes.json"));
});
// Uitbreiding, endpoint dat maar 1 item teruggeeft.

myServer.listen(PORT, HOST, () => {
  console.log(`Server staat aan op http://${HOST}:${PORT}`); // Afsluiten door Ctrl + C
});

console.log("Server bestand!");
