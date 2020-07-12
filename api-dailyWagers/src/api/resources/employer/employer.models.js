import mongoose from 'mongoose';
import { urlencoded } from 'body-parser';
const schema = mongoose.Schema;
const employerSchema = new schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    alternate:{
        type:Number,
        required:true
    },
    official_mail:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    point_of_contact:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    isActive:{
        type:String,
        
    },
    created_date:{
        type:Date,
       
    },
},{collection:'Employer'});
export default new mongoose.model('employer',employerSchema);