let express = require("express");
var cors = require("cors");
let myApp = express();
myApp.use(cors());
let path = require("path");

let BodyParser = require("body-parser");
myApp.use(BodyParser.json());
let config = require("./config");
let jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

let mongoose = require("mongoose");
let SiteUsers = require(".//db/models/users");
let Transactions = require(".//db/models/Expense");
mongoose.connect(
  "mongodb+srv://ahsan:ogqXCFNaawQEencI@cluster0.r96s4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  (err, connection) => {
    console.log(err || connection);
  }
);

myApp.post("/checksession", async function (req, res) {
  var decoded = jwt_decode(req.body.token);
  if (decoded.id) {
    SiteUsers.findOne({ _id: decoded.id }, function (err, docs) {
      res.send(docs);
    });
  }
});

myApp.post("/signup", async function (req, res) {
  let user1 = await SiteUsers.findOne({
    email: req.body.email,
  });
  if (user1) {
    res.json({
      msg: "Email Already in Use",
    });
  } else {
    let user = new SiteUsers();
    // eslint-disable-next-line no-unused-expressions
    (user.name = req.body.name),
      (user.email = req.body.email),
      (user.password = req.body.password),
      (user.contact = req.body.contact),
      await user.save();

    res.json({
      msg: "Signed Up...!",
    });
  }
});
myApp.post("/login", async function (req, res) {
  let user = await SiteUsers.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    let userToken = { id: user._id };
    jwt.sign(
      userToken,
      config.secret,
      {
        expiresIn: "2d",
      },
      (err, token) => {
        res.json({
          token,
          success: true,
          msg: "User Found",
          _id: user._id,
          name: user.name,
          password: user.password,
          email: user.email,
        });
      }
    );
  } else {
    res.json({
      msg: "User Not Found",
    });
  }
});
myApp.post("/addExpense", async (req, res) => {
  try {
    const decoded = jwt_decode(req.body.token);
    if (decoded.id) {
      const user = SiteUsers.findOne({ _id: decoded.id });
      if (user) {
        console.log(user._conditions._id);
        let expense = new Transactions();
        expense.description = req.body.description;
        expense.amount = req.body.transactionAmount;
        expense.owner = user._conditions._id;

        await expense.save();
        res.send({
          msg: "success",
        });
      }
    }
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});
myApp.post("/delete", async (req, res) => {
  let record = await Transactions.findById(req.body.id);
  console.log(record, "student");

  Transactions.findOneAndDelete({ _id: req.body.id }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("row Deleted", docs);
    }
  });
  res.json({
    msg: "deleted",
  });
});
myApp.post("/getRecord", async (req, res) => {
  Transactions.find({ owner: req.body.id }, function (err, docs) {
    console.log(docs);
    res.send(docs);
  });
});

myApp.post('/updateProfile',  async function (req, res) {
  console.log(req.body);
  let name = req.body.name;
  let email = req.body.email;
  let pass = req.body.password;
  let contact = req.body.contact;

  if (name == '') { name = req.body.name }
  if (email == '') { email = req.body.email }
  if (pass == '') { pass = req.body.password }
  if (contact == '') { contact = req.body.contact }

  SiteUsers.findByIdAndUpdate(req.body.id, { name, email, password: pass, contact }, function (req, res) {
      console.log('Updated' + res)
  })
  res.json({
      msg: "updated"
  });
});

myApp.use(express.static("./server/build"));
myApp.use(express.static("./build"));

myApp.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

myApp.listen(process.env.PORT || 6060, function () {
  console.log("Server in Working State");
});
