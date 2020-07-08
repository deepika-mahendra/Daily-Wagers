import user from './user.models'
import userService from './user.service';
export default{
findAll(req,res,next){
    user.find().then(user => res.json(user))
    .catch(err => res.status(500).json(err));
},
create(req,res){
    let {name, role, contact, email, password } = req.body;
    if(!name){
        return res.status(400).json({err: "name is required"});
    }
    else if (!role){
        return res.status(400).json({err:"role is required"});
    }
    else if(!contact){
        return res.status(400).json({err: "contact is required"});
    }
    else if(!email){
        return res.status(400).json({err: "email is required"});
    }
    else if(!password){
        return res.status(400).json({err: "password is required"});
    }
  
   user.create({name, role, contact, email, password})
   .then(user => res.json(user))
    .catch(err=>res.status(500).json({err:'user cannot be created'}));
},
findOne(req,res){
    const id = req.params.id;
    user.findById(id).then(user => {
        if(!user){
            return res.status(400).json({err: "user not found."});
        }
        return res.json(user);
    })
    .catch(err => res.status(500).json(err));
},

DeleteElement(req,res){
    const id = req.params.id;
    user.findByIdAndRemove(id).then(user => {
        if(!user){
            return res.status(400).json({err: "user not found."});
        }
        return res.json(user);
    })
    .catch(err => res.status(500).json(err));
},
update(req,res){
    const id = req.params.id
    user.findOneAndUpdate({_id:id},{$set:req.body},{new:true}).then(user=>{
        if(!user){
            return res.status(400).json({err: "user not found."});
        }
        return res.json(user);
    })
    .catch(err => res.status(500).json(err));
},
async signup(req,res){
    try {
        const {error,value}= userService.validationSchema(req.body);
        if(error && error.details){
            return res.status(500).json(error);
        }
        //create user
      await User.create(value)
      .then(item => res.json(item))
      .catch(err=> res.status(500).json(err));
        console.log(value);
    } catch (err) {
        console.log(err);
    }
},
async login(req,res){
    try {
        const {error,value}= userService.validateLoginSchema(req.body);
        if(error && error.details){
            return res.status(500).json(error);
        }
        const User = await user.findOne({email:value.email});
        if(!User){
            return res.status(400).json({err:'Invalid email'});
        }
        else if(User.password != value.password){
            return res.status(400).json({err:'Invalid password'});
        }
        else {
            return res.json(User);
        }
    }
        catch(err){
            console.log(err);
        }

}

};