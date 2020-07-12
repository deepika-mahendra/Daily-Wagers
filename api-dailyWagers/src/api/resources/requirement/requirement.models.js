import mongoose from 'mongoose';
import { urlencoded } from 'body-parser';
const schema = mongoose.Schema;
const requirementSchema = new schema({
    description:{
        type:String,
        required:true
    },
    employee_id:{
        type:String,
    },
    location:{
        type:String,
        required:true
    },
    skill_req:{
        type:String,
        required:true
    },
    req_workers:{
        type:Number,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    start_date:{
        type:Date,
        required:true
    },
    end_date:{
        type:Date,
        required:true
    },
    payment:{
        type:Number,
        required:true
    },
    benifits:{
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
},{collection:'requirement'});
export default new mongoose.model('require',requirementSchema);