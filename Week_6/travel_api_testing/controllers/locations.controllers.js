const pathModule = require("path");
const { getContentFromFile } = require("../utils/files.utils");
const fileSystem = require('fs/promises');
const filePath = pathModule.join(__dirname, '..', 'models', 'locations.json');
const crypto = require('crypto');
const { locationValidator } = require("../validation/locations.validation");

function getLocations(req, res) {
    console.log('Get locations!');
    res.send("Data verstuurd naar gebruiker!");
}

async function addLocation(req, res) {
    // Valideer de doorgestuurde locatie!
    const { error } = locationValidator.validate(req.body);

    if (error) {
        res.status(400);
        return res.json({
            validation: error.details[0].message
        });
    }

    const locations = await getContentFromFile('locations.json');

    const updatedBody = { ...req.body, id: crypto.randomUUID() };
    locations.push(updatedBody);

    // In eigen functie?
    await fileSystem.writeFile(filePath, JSON.stringify(locations, null, 2), 'utf-8');
    console.log('Post a new location!', req.body, locations);

    // Vergeet niet de filesystem acties te valideren! (try/catch)
    res.status(201);
    res.send("Data is succesvol toegevoegd!");
}

module.exports = {
    getLocations,
    addLocation
}