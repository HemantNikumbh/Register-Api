const { Schema } = require("zod");

const validate = (Schema) =>async(req,res,next) =>{
    try{
        const parsebody = await Schema.parseAsync(req.body);
        req.body = parsebody;
        next();

    }catch(err){
        //res.status(400).json({msg:"validation fail"});
        const message = err.errors[0].message;
        console.log(message);
        res.status(400).json({msg:message});
        /*const status = 422;
        const message = "FILL INPUT PROPERLY";
        const extraDetails = err.errors[0].message;

        const error = {
            status,
            message,
            extraDetails,
        };
        console.log(error);
       // res.status(400).json({msg:message});
       next(error);*/


    }


};

module.exports = validate