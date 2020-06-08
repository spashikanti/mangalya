const pool = require("./db");

// constructor
const userModel = function (user) {
  this.orgId = user.orgId;
  this.fullName = user.fullName;
  this.userEmail = user.userEmail;
  this.userPwd = user.userPwd;
  this.mobile = user.mobile;
  this.userType = user.userType;
  this.isActive = user.isActive;
  this.endDate = user.endDate;
};

userModel.getAllUsersByOrgId = (orgId) => {
  console.log("user model: ", orgId);
  return new Promise((resolve, reject) => {
    console.log("inside usermodel promise: ", orgId);
    pool.query("CALL sp_getAllUsersByOrgId(?)", orgId, (err, results) => {
      if(err){
        console.log("inside usermodel error: ", orgId);
        return reject(err);
      }
      return resolve(results);
    });
  });
};

userModel.getUserLoginDetails = (userEmail, userPwd) => {
  return new Promise((resolve, reject) => {
    var query =
      "CALL sp_getUserLoginDetails('" + userEmail + "','" + userPwd + "')";
    pool.query(query, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

userModel.createUser = (user) => {
  console.log("UserModel: ", user);

  return new Promise((resolve, reject) => {
    // pool.query("INSERT INTO tbluser SET ?", user, (err, results) => {
    pool.query(
      "CALL sp_createUser(?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        user.OrgId,
        user.FirstName,
        user.LastName,
        user.UserEmail,
        user.UserPwd,
        user.Mobile,
        user.UserType,
        user.IsActive,
        user.EndDate,
      ],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

userModel.updateUser = (user) => {
  console.log("update user UserModel: ", user);

  return new Promise((resolve, reject) => {
    pool.query(
      "CALL sp_updateUser(?, ?, ?, ?, ?, ?, ?)",
      [
        user.UserId,
        user.UserEmail,
        user.Mobile,
        user.EndDate,
        user.IsActive,
        user.FirstName,
        user.LastName
      ],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

module.exports = userModel;
