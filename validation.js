const{z} = require("zod")

const SignUpSchema = z.object({
    username:z
    .string({required_error:"Name is require"})
    .trim()
    .min(3,{message:"Name must be al least of 3 chars"})
    .max(255,{message:"Name not more than 255 character"}),

    email:z
    .string({required_error:"email is require"})
    .trim()
    .email({message:"invalid email address"})
    .min(3,{message:"email must be al least of 3 chars"})
    .max(255,{message:"email not more than 255 character"}),

    phone:z
    .string({required_error:"phone is require"})
    .trim()
    .min(10,{message:"phone must be al least of 10 chars"})
    .max(20,{message:"phone not more than 20 character"}),

    password:z
    .string({required_error:"password is require"})
    .trim()
    .min(7,{message:"Password must be al least of 7 chars"})
    .max(1024,{message:"Password not more than 1024 character"})


});

module.exports = SignUpSchema;