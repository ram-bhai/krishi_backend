const admin = require('../models/admin.model');

exports.signin = (request, response) => {
    admin.create({ email: request.body.email, password: request.body.password }).then(result => {
        return response.status(200).json(result)
    }).catch(error => {
        return response.status(500).json(error)
    })
}