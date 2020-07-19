import mongoose from 'mongoose';
import user from '../users/user.models';
import require from '../requirement/requirement.models'
import { urlencoded } from 'body-parser';


const schema = mongoose.Schema;
const workSchema = new schema({
    req_id:{
        ref:'require',
        type:schema.Types.ObjectId,

        required:true
    },
    employee_id:[{
        ref:'user',
        type:schema.Types.ObjectId,
        required:true
        
    }],
    isActive:{
        type:String
    },
    created_dt:{
        type:Date,
       
    },
},{collection:'workmapping'});
export default new mongoose.model('work',workSchema);