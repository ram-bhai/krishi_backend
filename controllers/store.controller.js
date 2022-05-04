const { validator, validationResult } = require('express-validator');
const store = require('../models/storage.model');

exports.add = (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(400).json({ errors: errors.array() });

    store.create({
        storageName: request.body.name
    }).then(result => {
        return response.status(200).json(result)
    }).catch(error => {
        return response.status(500).json(error)
    })
}