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
        if (players[i].name == ele.name) {
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
        if (players[i].name == element.playerName) {
            if (players[i].bookingNumber ){
                return res.send({data :"Already alloted slot"})}
            else {
                players[i].body = players[i]
                 return res.send({ data: players, status: true })
            }
        }
    }
    return res.send({data :"something relevant about player not being found."})
}
)
// if (players[i].name == element.playerName) {
//     players[i] = players[i].body
//     return res.send({ data: players, status: true })
//     // return res.send({data :"something relevant about player not being found."})
// }
// else 
// }
// else if (players[i].name == element.playerName && players[i].bookingNumber == false ){
//     players[i] = players[i].body
//     return res.send({ data: players, status: true })
// }




 const persons = [
    {
      name: "PK",
      age: 10,
      votingStatus: false
    },
    {
      nane: "SK",
      age: 20,
      votingStatus: false
    },
    {
      nane: "AA",
      age: 70,
      votingStatus: false
    },
    {
      name: "SC",
      age: 5,
      votingStatus: false
    },
    {
      nane: "HO",
      age: 40,
      votingStatus: false
    }
  ]
  
  router.post('/voting',function(req,res){
    let qerry = req.query
    let aa = [];
    for (let i=0; i<persons.length; i++){
        if(persons[i].age > qerry.votingAge){
          persons[i].votingStatus = true;
          aa.push(persons[i])
        }
      }
      return res.send({data : aa})
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