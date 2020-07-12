import Joi from 'joi';
export default{
    validationSchema(body){
        const schema = Joi.object().keys({
            employee_id:Joi.number().required(),
            name:Joi.string().required(),
            dob:Joi.date().required(),
            address:Joi.string().required(),
            city:Joi.string().required(),
            State:Joi.string().required(),
            Pin:Joi.number().required(),
            contact:Joi.number().required(),
            email:Joi.string().email().required(),
            Adhar_no:Joi.number().required(),
            experience:Joi.number().required(),
            skills:Joi.string().required(),
            status:Joi.string().required(),
            gender:Joi.string().required(),
            isActive:Joi.number().required(),
            created_date:Joi.string().required(),
          
        });
        const {error,value} = Joi.validate(body,schema);
        if(error && error.details){
            return {error};
        }
        return{value};
        },
      
    }