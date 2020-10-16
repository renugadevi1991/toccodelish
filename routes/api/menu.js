const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// @route   GET api/menu/test
// Get menu test

router.get('/test', (req, res) => res.json({ msg: 'Menu Works' }));



const MongoClient = require('mongodb').MongoClient;
const connectionString = "mongodb+srv://superadmin:superadmin@tocco.3hlsj.mongodb.net/tocco?retryWrites=true&w=majority"

// @route   GET api/menu/ravioli

router.get('/pasta', (req, res) => {
  
  MongoClient.connect(connectionString, {useUnifiedTopology: true} , (err, client) => {
    // ... do something here
    if (err) return console.error(err)
    const db = client.db('toccoMenu')
    db.collection("menuCard").find({itemType:"pasta", itemDisplay: true}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
      //db.close();
    });
    
  });
  }
);

// @route   GET api/menu/cake

router.get('/cake', (req, res) => {
  
  MongoClient.connect(connectionString, {useUnifiedTopology: true} , (err, client) => {
    // ... do something here
    if (err) return console.error(err)
    const db = client.db('toccoMenu')
    db.collection("menuCard").find({itemType:"cake", itemDisplay: true}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
      //db.close();
    });
    
  });
  }
);

// @route   GET api/menu/cookies

router.get('/cookies', (req, res) => {
  
  MongoClient.connect(connectionString, {useUnifiedTopology: true} , (err, client) => {
    // ... do something here
    if (err) return console.error(err)
    const db = client.db('toccoMenu')
    db.collection("menuCard").find({itemType:"cookies", itemDisplay: true}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
      //db.close();
    });
    
  });
  }
);

// @route   GET api/menu/pizza

router.get('/pizza', (req, res) => {
  
  MongoClient.connect(connectionString, {useUnifiedTopology: true} , (err, client) => {
    // ... do something here
    if (err) return console.error(err)
    const db = client.db('toccoMenu')
    db.collection("menuCard").find({itemType:"pizza", itemDisplay: true}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
      //db.close();
    });
    
  });
  }
);

// @route   GET api/menu/sauce

router.get('/sauce', (req, res) => {
  
  MongoClient.connect(connectionString, {useUnifiedTopology: true} , (err, client) => {
    // ... do something here
    if (err) return console.error(err)
    const db = client.db('toccoMenu')
    db.collection("menuCard").find({itemType:"sauce", itemDisplay: true}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
      //db.close();
    });
    
  });
  }
);

module.exports = router;