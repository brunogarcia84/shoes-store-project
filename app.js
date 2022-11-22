const express = require("express");
const path = require("path");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
// const resume = require("./public/routes");

// Create Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "workwithus",
});

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/routes", (req, res) => {
  const data = {
    personName: req.body.name,
    personEmail: req.body.email,
    personPhone: req.body.phone,
    department: req.body.departments,
    availability: req.body.availability,
    reachOut: req.body.contact,
    message: req.body.comment,
    resume: req.body.resume,
  };

  console.log(data);
  const sql = "INSERT INTO resume SET ?";
  const query = db.query(sql, data, (error, result) => {
    if (error) throw error;
    console.log(result);
  });
});

// app.post("/routes", (req, res) => {
//   res.send(`
//   Name: ${req.body.name} <br>
//   Email: ${req.body.email} <br>
//   Phone: ${req.body.phone} <br>
//   Department: ${req.body.departments} <br>
//   Availability: ${req.body.availability} <br>
//   Contact: ${req.body.contact} <br>
//   Comment: ${req.body.comment} <br>
//   Resume: ${req.body.resume} <br>

//   `);
// });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
