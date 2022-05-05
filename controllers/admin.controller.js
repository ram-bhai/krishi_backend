const admin = require('../models/admin.model');
const messages = require("../models/query.models");
const contract = require("../models/contract_farming.model");
const user = require("../models/user.model");

exports.signin = (request, response) => {
    admin.create({ email: request.body.email, password: request.body.password }).then(result => {
        return response.status(200).json(result)
    }).catch(error => {
        return response.status(500).json(error)
    })
}

exports.userList = (request, response) => {
    user.find().then(result => {
        return response.status(200).json(result)
    }).catch(error => {
        return response.status(500).json(error)
    })
}

exports.viewqueries = (request, response) => {
    messages.find().then(result => {
        return response.status(200).json(result)
    }).catch(error => {
        return response.status(500).json(error)
    })
}

exports.viewList = (request, response) => {
    contract.find().then(result => {
        return response.status(200).json(result)
    }).catch(error => {
        return response.status(500).json(error)
    })
}


exports.deleteContract = (request, response) => {
    contract.deleteOne({ _id: request.params.id }).then(result => {
        return response.status(201).json(result);
    }).catch(error => {
        return response.status(500).json(error)
    });
}