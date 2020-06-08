const express = require("express");
//const userRouterApi = require('./app/routes/userRoute');
const bodyParser = require("body-parser");
const userModel = require("./app/model/userModel");

const app = express();

app.use(express.json());

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/*+json" }));

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));

// parse an HTML body into a string
app.use(bodyParser.text({ type: "text/html" }));

//all api's
//app.use('/api/users', userRouterApi);

require("./app/routes/userRoute")(app);

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" },
  ];

  res.json(customers);
});

app.get("/api/customers/:id", (req, res) => {
  console.log("customers: ", req.params.id);
  const customers = [
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" },
  ];

  res.json(customers);
});

app.get("/api/users/:orgId", async (req, res, next) => {
  try {
    var orgId = req.params.orgId;
    console.log("inside server:", orgId);
    let results = await userModel.getAllUsersByOrgId(orgId);
    res.json(results[0]);
  } catch (e) {
    console.log(e);
    res.statusMessage = e;
    res.sendStatus(500).send();
  }
});

app.post("/api/users", async (req, res, next) => {
  try {
    var userData = req.body;
    const errors = {};
    if (!validateUser(userData, errors)) {
      console.log("error in post: ", errors);
      res.statusMessage = errors;
      res.status(400).send();
    }
    //validateUser(userData);
    // console.log("error in post: ", error);
    // if(error){
    //   res.statusMessage = error;
    //   res.status(400).send();
    // }
    else {
      console.log("inside server:", userData);
      let results = await userModel.createUser(userData);
      res.json(results[0]);
    }
  } catch (e) {
    console.log(e);
    res.statusMessage = e;
    res.status(500).send();
  }
});

app.put("/api/users/:userId", async (req, res, next) => {
  try {
    var userData = req.body;
    const errors = {};
    if (!validateUser(userData, errors)) {
      console.log("error in post: ", errors);
      res.statusMessage = errors;
      res.status(400).send();
    } else {
      console.log("Update user:", userData);
      let results = await userModel.updateUser(userData);
      res.json(results[0]);
    }
  } catch (e) {
    console.log(e);
    res.statusMessage = e;
    res.sendStatus(500).send();
  }
});

app.delete("/api/users/:userId", async (req, res, next) => {
  try {
    var userId = req.params.userId;
    console.log("inside delete:", userId);
    let results = await userModel.deleteUser(userId);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.statusMessage = e;
    res.sendStatus(500).send();
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);

//http://localhost:5000/api/users/harika427@gmail.com/welcome@12345

//http://localhost:5000/api/users/sunil.pashikanti@gmail.com/welcome@12345

// function validateUser(user){
//   if(!user.FirstName) return "FirstName is required.";
//   if(!user.LastName) return "LastName is required";
//   return "";
// }

function validateUser(user, errors) {
  const { FirstName, LastName, UserEmail } = user;
  errors = {};

  if (!FirstName) errors.FirstName = "First Name is required";
  if (!LastName) errors.LastName = "Last Name is required";
  if (!UserEmail) errors.UserEmail = "User Email is required";

  //setErrors(errors);
  return Object.keys(errors).length === 0;
}
