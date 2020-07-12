import mongoose from 'mongoose';
const schema = mongoose.Schema;
const registrationSchema = new schema({
    employee_id:{
        type:Number,
        
    },
    name:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    Pin:{
        type:Number,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Adhar_no:{
        type:Number,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    status:{
        type:String,
    
    },
    skills:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    created_date:{
        type:String,
      
    },
    isActive:{
        type:Number
    }
},{collection:'Employee'});
export default new mongoose.model('Emp',registrationSchema);