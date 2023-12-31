const Joi = require('joi');

const email = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } });
const pin = Joi.string().min(6).max(6);
const newPassword =Joi.string().alphanum().min(3).max(20).required()

const reqPasswordMiddleware = (req, res, next) => { 
    const schema = Joi.object({ email });
    const value = schema.validate(req.body);
    if (value.error) {
        return res.json({ status:"error",message: value.error.message });
    }
    next();
}
const updatePasswordMiddleware = (req, res, next) => { 
    const schema = Joi.object({ email,pin,newPassword });
    const value = schema.validate(req.body);
    if (value.error) {
       return res.json({ status:"error",message: value.error.message });
    }
    next();
}


module.exports ={reqPasswordMiddleware,updatePasswordMiddleware}