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
            description_1: request.body.description_1,
        })
        .then(result => {
            return response.status(200).json(result);
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
    let storage = await substorageM.findOne({ _id: request.body.storage_id });
    console.log(storage);
    storage.items.push(item);
    storage.save().then(result => {
        return response.status(200).json(result)
    }).catch(
        err => {
            return response.status(500).json(err);
        })
}


// exports.viewItems = async(request, response) => {
//     var storage = await substorageM.findOne({ _id: request.params.id });
//     console.log(storage)
//         storage.find(items)
//     let res = storage.items.map(({ name }) => name).then(result => {
//         console.log(res);
//         console.log(name);
//         console.log(result);
//         return response.status(200).json(result)
//     }).catch(error => {
//         return response.status(500).json(error)
//     })
// }

exports.updateitems = async(request, response) => {
    var storage = await substorageM.findOne({ _id: request.params.id });
    var result = storage.items.filter(obj => {
        return obj._id == (request.body.id)
    })
    const { charges, name, description } = request.body;
    if (name) {
        result[0].name = name
    }
    if (charges) {
        result[0].charges = charges
    }
    if (description) {
        result[0].description = description
    }
    for (let i = 0; i < storage.items.length; i++) {
        if (storage.items[i]._id == request.body.id) {
            storage.items.pull({ _id: request.body.id });
            storage.items.push({ name: result[0].name, charges: result[0].charges, description: result[0].description, _id: result[0]._id })
        }
    }
    storage.save().then((result) => {
        response.status(200).json(result)
    }).catch((err) => {
        response.status(500).json(err)

    })
}

exports.deleteitems = async(request, response) => {
    let storage = await substorageM.findOne({ _id: request.params.id });
    console.log(storage);
    storage.items.pull({ _id: request.body.id });
    storage.save().then(result => {
        return response.status(201).json(result)
    }).catch(
        err => {
            return response.status(500).json(err);
        })
}

exports.view = (request, response) => {
    substorageM.find().then(result => {
        return response.status(200).json(result);
    }).catch(err => {
        console.log(err);
        return response.status(500).json({ err: "server err..." })
    });
}

exports.delete = (request, response) => {
    substorageM.deleteOne({ _id: request.params.id }).then(result => {
        return response.status(200).json(result);
    }).catch(err => {
        return response.status(500).json(err, { error: "server error" })
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
            return response.status(200).json(result);
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ err: "server err.." })
        });
}

exports.bookstorage = async(request, response) => {
    const bookingstorage = {
        user: request.params.id,
        item: request.body.itemid,
        start_date: request.body.date,
        end_date: request.body.valid_till,
        measurement: request.body.quantity,
    }
    console.log(bookingstorage);
    let storage = await substorageM.findOne({ _id: request.body.id });
    console.log(storage);
    storage.customers.push(bookingstorage);
    storage.save().then(result => {
        return response.status(201).json(result)
    }).catch(
        err => {
            return response.status(500).json(err);
        })

}

exports.itemsofcustomer = async(request, response) => {
    const products = {
        name: request.body.name,
        weight: request.body.weight,
        isAvailable: request.body.isAvailable
    }
    console.log(products);
    var result;
    var storage = await substorageM.findOne({ _id: request.body.storageid })
    if (storage) {
        result = storage.customers.filter(obj => {
            return obj._id == (request.body.id)
        })
        console.log(result);
        result[0].item.push(products);
        result[0].save().then(next => {
            storage.save().then(result => {
                return response.status(201).json(result)
            }).catch(
                err => {
                    return response.status(500).json(err);
                }).catch(error => {
                return response.status(403).json(error, { error: "unable to reach from item in customers" })
            })



        })
    }
}