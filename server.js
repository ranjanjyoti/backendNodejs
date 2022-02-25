const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const employeeRoutes = require("./routes/employees");
var app = express();
app.use(bodyParser.json());
app.use("/employees", employeeRoutes);

app.listen(3000);