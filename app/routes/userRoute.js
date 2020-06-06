// const express = require('express');
// const userController = require('../controller/userController');

// const userRouter = express.Router();

// userRouter.get('/:orgId', async(req, res, next) => {
//     try{
//         var orgId = req.params.orgId;
//         console.og(orgId);
//         let results = await userController.getAllUsersByOrgId(orgId);
//         res.json(results);
//     }catch(e){
//         console.log(e);
//         res.sendStatus(500);
//     }
// });

// userRouter.get('/:userEmail/:userPwd', async(req, res, next) => {
//     try{
//         var userEmail = req.params.userEmail;
//         var userPwd = req.params.userPwd;
//         let results = await userController.getUserLoginDetails(userEmail, userPwd);
//         res.json(results);
//     }catch(e){
//         console.log(e);
//         res.sendStatus(500);
//     }
// });

// userRouter.post('/', async(req, res, next) => {
//     // const { errors, isValid } = validateInput(req.body);
//     // console.log(isValid);
//     try{
//         // if(!isValid){
//         //     console.log("inside post is not valid - errors:", errors);
//         //     res.sendStatus(400).json(errors);
//         // }
//         // else{
//             let results = await userController.createUser(req.body);
//             res.json(results);
//         //}
//     }catch(e){
//         console.log("inside catch:", e);
//         if(!isValid){
//             await Promise.reject(res.sendStatus(400).json(errors));
//         }
//         else{
//             res.sendStatus(500);
//         }
//     }
// });

// module.exports = userRouter;


module.exports = app => {
    const users = require("../controller/userController");
  
    console.log('user route');
    // // Create a new Customer
    // app.post("/customers", customers.create);
  
    // // Retrieve all Customers
    // app.get("/customers", customers.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/users/:orgId", users.getAllUsersByOrgId);
  
    // // Update a Customer with customerId
    // app.put("/customers/:customerId", customers.update);
  
    // // Delete a Customer with customerId
    // app.delete("/customers/:customerId", customers.delete);
  
    // // Create a new Customer
    // app.delete("/customers", customers.deleteAll);
  };