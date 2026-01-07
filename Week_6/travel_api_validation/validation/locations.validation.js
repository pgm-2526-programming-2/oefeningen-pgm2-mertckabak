const Joi = require('joi');

const locationValidation = Joi.object({
    name: Joi.string().required(),
    country: Joi.string().required(),
    city: Joi.string().required(),
    coordinates: Joi.object({
        lat: Joi.number().min(-90).max(90).required(),
        long: Joi.number().min(-180).max(180).required()
    }).required()
});

module.exports = {
    locationValidation
}