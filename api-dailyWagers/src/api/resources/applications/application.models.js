import mongoose from 'mongoose';
import { urlencoded } from 'body-parser';


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
        type:String
    },
    created_dt:{
        type:Date,
       
    },
},{collection:'application'});
export default new mongoose.model('application',applicationSchema);