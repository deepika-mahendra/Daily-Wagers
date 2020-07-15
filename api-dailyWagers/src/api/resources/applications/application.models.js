import mongoose from 'mongoose';
import { urlencoded } from 'body-parser';
import { date } from 'joi';


const schema = mongoose.Schema;
const applicationSchema = new schema({
    req_id:{
        type:String,
        required:true
    },
    employee_id:{
        type:String,
        required:true
        
    },
    isActive:{
        type:String,
        default:"True"
    },
    created_dt:{
        type:Date,
        default:Date.now
       
    },
},{collection:'application'});
export default new mongoose.model('application',applicationSchema);