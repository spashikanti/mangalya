const userModel = require('../model/userModel');

const userController = {};

userController.getUserLoginDetails = (userEmail, userPwd) => {
    const userDetails = userModel.getUserLoginDetails(userEmail, userPwd);
    console.log(userDetails);
    return userDetails;
};

userController.createUser = (user) => {
    const userDetails = userModel.createUser(user);
    console.log(userDetails);
    return userDetails;
}

module.exports = userController;