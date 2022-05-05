const { response } = require("express");
const { request } = require("express");
const res = require("express/lib/response");
const substorageM = require("../models/subStorage.model");

exports.add=(request,response)=>{
    let a = request.body.total_space;
    let b = request.body.isAvailable;
    let c = request.body.images;
    let d = request.body.charges;
    let e = request.body.location;
    let f = request.body.items;
    let g = request.body.description;
    let h = request.params.id;

    substorageM.create({total_space:a,isAvailable:b,images:c,charges:d,location:e,items:f,description:g,id:h})
    .then(result=>{
        return response.status(201).json(result);
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({err:"server err.."})
    });
}
exports.view=(request,response)=>{
    substorageM.find().then(result=>{
        return response.status(201).json(result);
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({err:"server err..."})
    });
}

exports.delete=(request,response)=>{
    substorageM.deleteOne({_id:request.params.id}).then(result=>{
        return response.status(201).json(result);
    }).catch(err=>{
        return response.status(500).json({err:"server err..."})
    });
}

exports.update = (request, response) => {
    substorageM.updateOne({ _id: request.params.id},
        {
            $set: {
                total_space:request.body.total_space,
                isAvailable:request.body.isAvailable,
                items:request.body.items,
                charges:request.body.charges,
                description:request.body.description
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


