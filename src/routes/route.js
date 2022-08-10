const express = require('express');
const router = express.Router();

let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },
    ]

router.post('/players', function (req, res) {

    //LOGIC WILL COME HERE
    let ele = req.body
    for (let i in players) {
        if (players[i].name != ele.name) {
            return res.send("This player was already added!")

        }
    }
    players.push(ele)
    return res.send({ data: players, status: true })

})
router.post('/players/:playerName/bookings/:bookingId', function (req, res) {
    let element = req.params
    let body = req.body
    for (let i in players) {
        if (players[i].name != element.playerName) {
            return res.send({data :"something relevant about player not being found."})
        }
        else if (players[i].bookingNumber ){
            return res.send({data :"Already alloted slot"})
        }
        else if (players[i].name == element.playerName && players[i].bookingNumber == false ){
            players[i] = players[i].body
            return res.send({ data: players, status: true })
        }
    }
})


router.get('/students/:name', function (req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/plutonium", function (req, res) {
    res.send("hi there")
})




module.exports = router;