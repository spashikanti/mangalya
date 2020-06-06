const express = require('express');
//const userRouterApi = require('./app/routes/userRoute');
const bodyParser = require('body-parser');
const userModel = require('./app/model/userModel');

const app = express();

app.use(express.json());

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))


//all api's
//app.use('/api/users', userRouterApi);

require("./app/routes/userRoute")(app);

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

app.get('/api/customers/:id', (req, res) => {
    console.log("customers: ", req.params.id);
    const customers = [
      {id: 2, firstName: 'Brad', lastName: 'Traversy'},
      {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    ];
  
    res.json(customers);
  });

// app.get("/api/users/:orgId", (req, res) => {
//     let orgId = req.params.orgId;
//     console.log("inside server:", orgId)
//     return userModel.getAllUsersByOrgId(orgId, (err, data) => {
//         if (err) {
//             console.log("inside err");
//             if (err.kind === "not_found") {
//                 res.status(404).send({
//                 message: `Not found users with orgid ${req.params.orgId}.`,
//                 });
//             } else {
//                 res.status(500).send({
//                 message: "Error retrieving User with OrgId " + req.params.orgId,
//                 });
//             }
//         } 
//         else{
//             console.log("inside success");
//             res.send(data);
//         }
//     });
// });

app.get('/api/users/:orgId', async(req, res, next) => {
    try{
        var orgId = req.params.orgId;
        console.log("inside server:", orgId)
        let results = await userModel.getAllUsersByOrgId(orgId);
        res.json(results[0]);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);

//http://localhost:5000/api/users/harika427@gmail.com/welcome@12345

//http://localhost:5000/api/users/sunil.pashikanti@gmail.com/welcome@12345