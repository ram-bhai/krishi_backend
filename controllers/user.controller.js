const { validator, validationResult } = require('express-validator');
const user = require('../models/user.model');

exports.signup = (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(400).json({ errors: errors.array() });

    user.create({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        occupation: request.body.occupation,
        contact: request.body.mobile,
        address: request.body.address
    }).then(result => {
        return response.status(200).json(result)
    }).catch(error => {
        return response.status(500).json(error)
    })
}

exports.signin = (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(400).json({ errors: errors.array() });

    user.findOne({ email: request.body.email, password: request.body.password }).then(result => {
        return response.status(200).json(result)
    }).catch(error => {
        return response.status(401).json(error)
    })
}