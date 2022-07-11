const userdb = require('../model/model');

// create user 

exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({message : "please enter details"});
        return;
    }

    //new user
    const user = new userdb({
        name : req.body.name,
        email : req.body.email,
        gender : req.body.gender,
        status : req.body.status
    })

    // save user data in database
    user.save(user)
        .then(data =>{
            // res.send(data);
            res.redirect('/');
        })
        .catch(err =>{
            res.status(500).send({message : err.message || "Some error occured"});
        })
}

// retrieve all the users or a single user from database

exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        userdb.findById(id)
            .then(data=>{
                if(!data){
                    res.status(404).send({message : "data not found"});
                }
                else{
                    res.send(data);
                }
            })
            .catch(err=>{
                res.status(500).send({message : "some error occured"});
            })
    }
    else{
        userdb.find()
            .then(user =>{
                res.send(user);
            })
            .catch(err=>{
                res.status(500).send({message : "some error occured"});
            })
    }

}


    // update the user in database by id

exports.update = (req,res)=>{
    const id = req.params.id;
    userdb.findByIdAndUpdate(id,req.body)
        .then(data=>{
            if(!data){
                res.status(404).send({message : "data not found"});
            }
            else{
                res.send(data);
            }
        })
        .catch(err=>{
            res.status(500).send({message : "some error occured"});
        })
}


    // delete user from database using id

exports.delete = (req,res)=>{
    const id= req.params.id;
    userdb.findByIdAndDelete(id)
        .then(data=>{
            res.send({message:"data deleted succesfully"});
        })
        .catch(err=>{
            res.status(500).send({message : "some error occured"});
        })
}