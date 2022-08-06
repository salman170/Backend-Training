const express = require('express');
const abc = require('../introduction/intro')
const ass1 = require('../logger/logger')
const ass2 = require('../util/helper')
const ass3 = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    ass1.Greeting()
    ass2.printDate()
    ass3.fun()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason