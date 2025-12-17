const pathModule = require("path");
const { getContentFromFile } = require("../utils/files.utils");
const fileSystem = require("fs/promises");
const filePath = pathModule.join(__dirname, "..", "models", "locations.json");
const crypto = require("crypto");

function getLocations(req, res) {
  console.log("Get locations");

  res.send("Data verstuurt naar de gebruiker!");
}

async function addLocation(req, res) {
  const locations = await getContentFromFile("locations.json");
  const updatedBody = { ...req.body, id: crypto.randomUUID() };
  locations.push(req.body);
  await fileSystem.writeFile(
    filePath,
    JSON.stringify(locations, null, 2),
    "utf-8"
  );
  console.log("Post a new location", req.body, locations);
  res.status(201);
  res.send("Data is succesvol toegevoegd!");
}

module.exports = {
  getLocations,
  addLocation,
};
