const express = require("express");
const LoginRouter = express.Router();
const { createAccessJwt, createRefreshJwt } = require('../utils/jwt')
const { getresetPin } = require("../user/resetPassword/restPassword.model")
const { userAuthorization } = require("../middleware/authorization.middleware")
const{reqPasswordMiddleware,updatePasswordMiddleware} =require("../middleware/formValidator.middleware")
// requiring the insert query from user/modal/user.modal
const { insert, getUserByEmail, getUserByID , storeUpdatedPassword ,storeRefreshJWT} = require('../user/model/user.model')
const {delJwt} =require("../utils/redis.helper")
LoginRouter.all("/", (req, res, next) => {
    res.json({
        message: "return user router"
    })
    next();
})

// import hassedpasswordfunc
const { hassedPassFunc } = require('../utils/BrcyptingPassword')

// create new user coming to webPage;
LoginRouter.post('/newUser', async (req, res) => {
    const { name, company, address, email, password } = req.body;
    let hasedPassword = await hassedPassFunc(password)
    console.log(hasedPassword)
    try {

        const result = await insert({ name, company, address, email, password: hasedPassword })
        console.log(result);
        return res.json({
            message: 'user inserted', result
        })
    } catch (error) {
        console.log(error);
        return res.json({
            message: 'error in inserting data'
        })

    }
})


// create  userLogin Route
// check if user is there in DB through email and bcrypt compare
const { ComparePassword } = require('../utils/BrcyptingPassword')
LoginRouter.post('/login', async (req, res) => {
    console.log(ComparePassword, "this is comparePassword function");
    try {

        const { email, password } = req.body
        if (!email || !password) {
            return res.json({ status: "failed", message: "login unsuccessful" })
        }
        const user = await getUserByEmail(email);
        console.log("user from database is:", user);
        const passwordFromDatabase = user && user._id ? user.password : null;
        console.log(passwordFromDatabase, email);

        // if user and user's passsword exists than comparePassword using bcrypt
        if (user && user.password) {
            const result = await ComparePassword(password, passwordFromDatabase)
            if (result) {

                // making two tokens with jwt 
                const accessToken = await createAccessJwt(user.email, `${user._id}`);

                const refreshToken = await createRefreshJwt(user.email, `${user._id}`);
                res.json({ status: 'success', message: 'login succesfully', accessToken, refreshToken })
            }

            console.log(result);
        } else {
            console.log("User not Found or User password invalid");
            res.json({ status: 'error', message: 'User not Found or User password invalid' })
        }

    } catch (error) {
        console.log(error)
    }
    // res.json({status:"success",message:"login successully"})

})

// Get user profile router with authorization access token and also delete the expired accesstoken from redisdb
LoginRouter.get("/user", userAuthorization, async (req, res) => {
    // suppose this data coming from client form
    try {
        const id = req.userid;
        const getUser = await getUserByID(id)
        console.log(getUser);
        res.json({ user: req.userid })
    } catch (error) {
        console.log(error);
    }
})


const emailProcessor = require("../utils/email.helper")
LoginRouter.post('/reset-password',reqPasswordMiddleware, async (req, res) => {
    // here check email is valid or not
    // check for given user for the given email
    // create a numeric pin a6 digit unique;
    // email it to user
    try {
        const { email } = req.body;
        const user = await getUserByEmail(email)
        if (user && user._id) {
            // create a 6 digit unique numeric pin
            const setPin = await getresetPin(email)
            emailProcessor(email, setPin.pin,'request-new-password')

            return res.json({ setPin })
        }
        res.status(403).json({ status: 'error', message: 'Invalid email address for reset pin' })

    } catch (error) {
        console.log(error);
    }
})


const { getPasswordData ,deletePinfromDatabase} = require("../user/resetPassword/restPassword.model")
LoginRouter.patch("/update-password",updatePasswordMiddleware, async (req, res) => {
    // receive email,pin and new password,
    // check if given email and pin are there in db;
    // check if given pin is expired or not
    // in our case expiretime is 1 day.
    // encrypt new password and
    // update password in db,
    // send email notification.
    // delete the pin from database.
    try {
        let { email, pin, newPassword } = req.body;
        let result = await getPasswordData(email, pin)
        console.log(result);
        if (result?._id) {
            let dbtime = result.addedAt;
            let expiresIn = 1;
            let expiryDate = dbtime.setDate(dbtime.getDate() + expiresIn);
            let today = new Date();
            // checked if today is less than expiry data of pin
            if (today > expiryDate) {
                return res.json({message:"Your pin has expired"});
                
            }

            let hassedPassword = await hassedPassFunc(newPassword)
            let updatedUser = await storeUpdatedPassword(email, hassedPassword)
            console.log(updatedUser)
            if (updatedUser._id) {
                // send email notification
                emailProcessor(email, pin, "update-password-success")
                // delete the pin from the database of pindatabase.
                let deleteSucess = await deletePinfromDatabase(email, pin)
                if (deleteSucess) {
                    console.log("deleted pin successfully");
                }
                return res.json({message:"password updated successfully "});
            }
            

            // console.log(dbtime);
        } 
            
      res.status(403).send({ message: "cannot update password!! Please try again later" });
        

    } catch (error) {
        console.log(error);
    }

})

// logout from sytem if user is logged in , checking through userAuthorization middleware.
LoginRouter.delete("/logout", userAuthorization, async (req, res) => {
    // get authorization header ;
    // check if auth token exists in redis db;
    // if exists, delete the access token from redis db;
//    update the refresh token in redis db;
    try {
        const id = req.userid;
        const { authorization } = req.headers;

        // deleting the access token from redis db;
        delJwt(authorization);
        // update the refresh token in mongodb by doing it empty;
      let result = await storeRefreshJWT(id,"")
        if (result._id) {
    return res.json({status:"success", message:"logged out successfully"})
        }
        res.json({ status: "error", message: "failed during loging out" })
    } catch (error) {
        console.log(error);
    }
})




module.exports = LoginRouter