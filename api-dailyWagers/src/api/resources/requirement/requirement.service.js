import Joi from 'joi';
export default{
    validationSchema(body){
        const schema = Joi.object().keys({
            description:Joi.string().required(),
            employee_id:Joi.number().required(),
            location:Joi.string().required(),
            skill_req:Joi.string().required(),
            req_workers:Joi.number().required(),
            duration:Joi.number().required(),
            start_date:Joi.date().required(),
            end_date:Joi.date().required(),
            payment:Joi.number().required(),
            benifits:Joi.string().required(),
            url:Joi.string().required(),
            isActive:Joi.string().required(),
            created_date:Joi.date().required()
          
        });
        const {error,value} = Joi.validate(body,schema);
        if(error && error.details){
            return {error};
        }
        return{value};
        },
      
    }