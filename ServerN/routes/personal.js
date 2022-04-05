const express = require("express");

const personalRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;


personalRoutes.route("/personal").get(function (req, res) {
  let db_connect = dbo.getDb("jensencourses");
  db_connect
    .collection("personals")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

personalRoutes.route("/personal/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("personals")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

personalRoutes.route("/personal/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    firstName: req.body.firstName,
    email: req.body.email,
    phone: req.body.phone,
    kontonummer: req.body.kontonummer,
  };
  db_connect.collection("personals").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

personalRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
        firstName: req.body.firstName,
        email: req.body.email,
        phone: req.body.phone,
        kontonummer: req.body.kontonummer,
    },
  };
  db_connect
    .collection("personals")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

personalRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("personals").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = personalRoutes;