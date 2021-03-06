const { json } = require('body-parser');
const { response } = require('express');
const { request } = require('express');
const machinaryM = require('../models/machinary.model');
const User = require('../models/user.model');
exports.add = (request, response) => {
    // let a = request.body.name;
    // let b = request.body.images;
    // let c = request.body.charges;
    // let d = request.body.travelling_charges;
    // let e = request.body.desc;
    //console.log(request);
    machinaryM.create({
        toolname: request.body.name,
        images: "https://firebasestorage.googleapis.com/v0/b/krishi-sakha-f07d5.appspot.com/o/" + request.file.filename + "?alt=media&token=abcddcba",
        charges: request.body.charges,
        travelling_charges: request.body.travelling_charges,
        desc: request.body.desc
    }).then(result => {
        return response.status(200).json(result);
    }).catch(err => {
        console.log("error"+err);
        return response.status().json({ err: "Server Err..." })
    });

}
exports.viewWithId = (request,response) => {
    machinaryM.findOne({_id:request.params.id}).then(result => {
        console.log(result);
        // User.findOne({_id:request.user.id}).then(resultUser=>{
        //     console.log(resultUser);
             return response.status(200).json(result);
        // }).catch(err=>{
        //     return response.status(200).json(err);
        // })
    }).catch(err => {
        console.log(err);
        return response.status(500).json({ err: "server err.." });
    });

}
exports.view = (request, response) => {
    machinaryM.find().then(result => {
        return response.status(200).json(result);
    }).catch(err => {
        console.log(err);
        return response.status(500).json({ err: "server err.." });
    });

}
exports.update = (request, response) => {
    machinaryM.updateOne({ _id: request.params.id }, {
            $set: {
                name: request.body.name,
                images: "https://firebasestorage.googleapis.com/v0/b/krishi-sakha-f07d5.appspot.com/o/" + request.file.filename + "?alt=media&token=abcddcba",
                travelling_charges: request.body.travelling_charges,
                desc: request.body.desc
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


exports.delete = (request, response) => {
    machinaryM.deleteOne({ _id: request.params.id })
        .then((result) => {
            console.log("Deleted sucessfully...");
            console.log(result);
            return response.status(201).json(result);
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ err: "server err..." })
        });
    }

exports.delete=(request,response)=>{
    machinaryM.deleteOne({_id:request.params.id})
    .then((result)=>{
        console.log("Deleted sucessfully...");
        console.log(result);
        return response.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({err:"server err..."})
    });
}

exports.delete = (request, response) => {
    machinaryM.deleteOne({ _id: request.params.id })
        .then((result) => {
            console.log("Deleted sucessfully...");
            console.log(result);
            return response.status(200).json(result);
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ err: "server err..." })
        });

}

exports.bookmachines = async(request, response) => {
    const booking = {
        user: request.params.id,
        bookingDate: request.body.date,
        location: request.body.address,
        Area: request.body.area,
        description: request.body.description
    }
    console.log(booking);
    let machine = await machinaryM.findOne({ _id: request.body.toolid });
    console.log(machine);
    machine.customer.push(booking);
    machine.save().then(result => {
        return response.status(201).json(result)
    }).catch(
        err => {
            return response.status(500).json(err);
        })

}

