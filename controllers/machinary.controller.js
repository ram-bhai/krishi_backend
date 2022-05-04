const { json } = require('body-parser');
const { response } = require('express');
const { request } = require('express');
const machinaryM = require('../models/machinary.model');

exports.add = (request, response) => {
    let a = request.body.name;
    let b = request.body.images;
    let c = request.body.charges;
    let d = request.body.travelling_charges;
    let e = request.body.desc;
    console.log(request);
    machinaryM.create({ toolname: a, images: b, charges: c, travelling_charges: d, desc: e }).then(result => {
        return response.status(201).json(result);
    }).catch(err => {
        console.log(err);
        return response.status().json({ err: "Server Err..." })
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
    machinaryM.updateOne({ _id: request.body.id},
        {
            $set: {
                a:request.body.name,
                b:request.body.images,
                c:request.body.travelling_charges,
                d:request.body.desc
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

exports.delete=(request,response)=>{
    machinaryM.deleteOne({_id:request.params.id})
    .then((result)=>{
        console.log("Deleted sucessfully...")
        return response.status(201).json(result);
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({err:"server err..."})
    });
}
