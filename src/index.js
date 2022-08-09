const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);
app.get('/sol1', function (req, res) {
    let aa = [1, 2, 3, 5, 6, 7]
    let total = 0
    for (let i in aa) {
        total += aa[i]
    }

    let sum = aa.pop()
    let sumOfarray = sum * (sum + 1) / 2
    let b = sumOfarray - total
    res.send({"Missing No is" :b })

})
app.get('/sol2', function (req, res) {
    let aa = [33,34,35,37,38]
    let len = aa.length
    let total = 0
    for (let i in aa) {
        total += aa[i]
    }

    let first = aa[0]
    let sum = aa.pop()
    let sumOfarray = (len + 1) * (first + sum) / 2
    let b = sumOfarray - total
    res.send({ "Missing No is" :b })

})

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

