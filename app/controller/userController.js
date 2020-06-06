const userModel = require('../model/userModel');

// const userController = {};

// userController.getAllUsersByOrgId = (orgId) => {
//     const userDetails = userModel.getAllUsersByOrgId(orgId);
//     console.log("controller: ", userDetails);
//     return userDetails;
// }

// userController.getUserLoginDetails = (userEmail, userPwd) => {
//     const userDetails = userModel.getUserLoginDetails(userEmail, userPwd);
//     console.log(userDetails);
//     return userDetails;
// };

// userController.createUser = (user) => {
//     const userDetails = userModel.createUser(user);
//     console.log(userDetails);
//     return userDetails;
// }

// module.exports = userController;
console.log("usr controler");

exports.getAllUsersByOrgId = (req, res) => {
    console.log('get all users called');
    userModel.getAllUsersByOrgId(req.params.orgId, (err, data) => {
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `Not found users with orgid ${req.params.orgId}.`
                });
            }else{
                res.status(500).send({
                    message: "Error retrieving User with OrgId " + req.params.orgId
                });
            }
        }
        else res.send(data);
    });
};