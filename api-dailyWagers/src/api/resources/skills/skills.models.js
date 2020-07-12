import mongoose from 'mongoose';
import { urlencoded } from 'body-parser';
import { string } from 'joi';
const schema = mongoose.Schema;
const skillSchema = new schema({
    name:{
        type:String,
        required:true
    },
    isActive:{
        type:String,
        
    },
    created_date:{
        type:Date,
       
    },
},{collection:'skills'});
export default new mongoose.model('skills',skillSchema);