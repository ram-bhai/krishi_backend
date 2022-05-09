const Machine = require('../models/machinary.model');
const Substorage = require('../models/subStorage.model'); 


exports.searchlocation=(request,response)=>{
    searchWord = request.body.word
    //  console.log(request.body)
    //  console.log(request.body.word)
    Substorage.find({location: { $regex: '^' + searchWord, $options: '$i' } }).then(result=>{
        //console.log(result)
       response.status(200).json(result);
    }).catch((err)=>{
        response.status(500).json(err);
    })
}

exports.seachservice=(request,response)=>{
    searchWord = request.body.word
    //  console.log(request.body)
    //  console.log(request.body.word)
    Machine.find({toolname: { $regex: '^' + searchWord, $options: '$i' } }).then(result=>{
        // console.log(result)
       response.status(200).json(result);
    }).catch((err)=>{
        response.status(500).json(err);
    })
}
