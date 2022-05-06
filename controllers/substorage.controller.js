const { response } = require("express");
const { request } = require("express");
const res = require("express/lib/response");
const substorageM = require("../models/subStorage.model");

exports.add = (request, response) => {
    substorageM.create({
            storage_id: request.params.id,
            total_space: request.body.total_space,
            isAvailable: request.body.isAvailable,
            location: request.body.location,
            images: request.body.images,
        })
        .then(result => {
            return response.status(201).json(result);
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ err: "server err.." })
        });
}

exports.additems = async(request, response) => {
    const item = {
        name: request.body.name,
        charges: request.body.charges,
        description: request.body.description
    }
    let storage = await substorageM.findOne({ _id: request.body.id });
    console.log(storage);
    storage.items.push(item);
    storage.save().then(result => {
        return response.status(201).json(result)
    }).catch(
        err => {
            return response.status(500).json(err);
        })
}

exports.view = (request, response) => {
    substorageM.find().then(result => {
        return response.status(201).json(result);
    }).catch(err => {
        console.log(err);
        return response.status(500).json({ err: "server err..." })
    });
}

exports.delete = (request, response) => {
    substorageM.deleteOne({ _id: request.params.id }).then(result => {
        return response.status(201).json(result);
    }).catch(err => {
        return response.status(500).json({ err: "server err..." })
    });
}

exports.update = (request, response) => {
    substorageM.updateOne({ _id: request.params.id }, {
            $set: {
                total_space: request.body.total_space,
                isAvailable: request.body.isAvailable,
                images: request.body.images,
                location: request.body.location       
             }
        })
        .then(result => {
            console.log(result);
            return response.status(201).json(result);
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ err: "server err.." })
        });
}