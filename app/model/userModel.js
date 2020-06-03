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
        user.orgId,
        user.firstName,
        user.lastName,
        user.userEmail,
        user.userPwd,
        user.mobile,
        user.userType,
        user.isActive,
        user.endDate,
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
