const pathModule = require("path");
const { getContentFromFile } = require("../utils/files.utils");
const fileSystem = require('fs/promises');
const crypto = require('crypto');
const { locationValidation } = require("../validation/locations.validation");
const filePath = pathModule.join(__dirname, '..', 'models', 'locations.json');

function getLocations(req, res) {
    console.log('Get locations!');
    res.send("Data verstuurd naar gebruiker!");
}

async function addLocation(req, res) {
    const locations = await getContentFromFile('locations.json');

    try {
        const { error, value } = locationValidation.validate(req.body);

        if (error) {
            // Handle validation error (e.g., missing 'name' or other keys)
            console.error("Validation error:", error.details[0].message);
            return res.status(400).json({ error: error.details[0].message });
        }

        // Proceed if validation passes
        console.log("Valid location:", value);
        // Add your logic to save the location here
    } catch (err) {
        // Handle unexpected errors (e.g., file read error)
        console.error("Unexpected error:", err);
        throw err;
    }

    locations.push({ ...req.body, id: crypto.randomUUID });
    await fileSystem.writeFile(filePath, JSON.stringify(locations, null, 2), 'utf-8');
    console.log('Post a new location!');
    res.status(201);
    res.send("Data is succesvol toegevoegd!");
}

module.exports = {
    getLocations,
    addLocation
}