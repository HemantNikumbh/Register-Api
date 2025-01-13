const User = require("../model/user-model")
const { use } = require("../Router/user-router")

const Register = async(req,res) =>{
    try{

        const{username,email,phone,password} = req.body
        
        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(400).json({msg:"email already exist"})
        }

        const user = await User.create({username,email,phone,password})

        res.status(200).json({
            message:user,
            token:await user.generatetoken(),
            userId:user._id.toString(),

        })

    }catch(error){
        console.log(error)
    }
}

module.exports = Register