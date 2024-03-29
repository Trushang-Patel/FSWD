const errorHandler = require('../middelwares/errorMiddleware');
const userModel = require('../models/userModel');
const errorResponse = require('../utils/errorResponse');

//JWT token
exports.sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken(res);
    res.status(statusCode).json({
        success:true,
        token,
    });
};


//register
exports.registerController = async (req,res,next) => { 
    try {
        const [username, email,password]= req.body
        //exisiting User
        const exisitingEmail = await userModel.findOne({email})
        if(exisitingEmail){
            return next(new errorResponse('Email is already register',500))
        }
        const user = await userModel.create({username,email,password})
        this.sendToken(user,201,res)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

//login
exports.loginController = async (req,res,next) => {
    try {
        const {email,password} = req.bpdy;
        //validation
        if(!email || !password){
            return next(new errorResponse('Please provide email or Password'))
        }
        const user = await userModel.findOne({email})
        if(!user){
            return next(errorResponse('Invalid Creditial',401))
        }
        const isMatch = await userModel.matchPassword(password);
        if(!isMatch){
            return next(new errorHandler('Invalid Creditial',401));
        }
        //responce
        this.sendToken(user,200,res);

    } catch (error) {
        console.log(error);
        next(error)
    }
 }

 //Logout
exports.logoutController = async (req,res,next) => { 
    res.clearCookie("refreshToken");
    return res.status(200).json({
        success:true,
        messsage:"Logout SuccessFully",
    })
}