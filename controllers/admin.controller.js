const admin = require('../models/admin.model');
const messages = require("../models/query.models");

exports.signin = (request, response) => {
    admin.create({ email: request.body.email, password: request.body.password }).then(result => {
        return response.status(200).json(result)
    }).catch(error => {
        return response.status(500).json(error)
    })
}

exports.viewqueries = (request, response) => {
    messages.find().then(result => {
        return response.status(200).json(result)
    }).catch(error => {
        return response.status(401).json(error)
    })
}