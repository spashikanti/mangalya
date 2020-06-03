const express = require('express');
const userController = require('../controller/userController');
const Validator = require ('validator');
const isEmpty = require('lodash/isEmpty');

const userRouter = express.Router();

userRouter.get('/:userEmail/:userPwd', async(req, res, next) => {
    try{
        var userEmail = req.params.userEmail;
        var userPwd = req.params.userPwd;
        let results = await userController.getUserLoginDetails(userEmail, userPwd);
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

function validateInput(data){
    let errors = {};

    if(Validator.isEmpty(data.firstName)){
        errors.firstName = 'This field is required';
    }
    if(Validator.isEmpty(data.lastName)){
        errors.lastName = 'This field is required';
    }
    if(Validator.isEmpty(data.userEmail)){
        errors.userEmail = 'This field is required';
    }
    if(!Validator.isEmail(data.userEmail)){
        errors.userEmail = 'Email is invalid';
    }
    if(Validator.isEmpty(data.userPwd)){
        errors.userPwd = 'This field is required';
    }
    if(Validator.isEmpty(data.endDate)){
        errors.endDate = 'This field is required';
    }

    return{
        errors,
        isValid: isEmpty(errors)
    }
}

userRouter.post('/', async(req, res, next) => {
    const { errors, isValid } = validateInput(req.body);
    console.log(isValid);
    try{
        if(!isValid){
            console.log("inside post is not valid - errors:", errors);
            res.sendStatus(400).json(errors);
        }
        else{
            let results = await userController.createUser(req.body);
            res.json(results);
        }
    }catch(e){
        console.log("inside catch:", e);
        if(!isValid){
            await Promise.reject(res.sendStatus(400).json(errors));
        }
        else{
            res.sendStatus(500);
        }
    }
});

module.exports = userRouter;
