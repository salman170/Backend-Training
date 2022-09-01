let axios = require("axios")


let getWeathers = async function (req, res) {
    try {
        let q = req.query.q
        let appid = req.query.appid
        console.log(`query params are: ${q} ${appid}`)
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let  result = await axios(options)
        // let  result2 = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`)
        let temp = result.data.main['temp']
        console.log(temp)
        res.status(200).send({ temp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




/**
 * 2.  GOTO  http://api.openweathermap.org => “subscribe” current weather data ==> get api key for Free version ==> create new account and Verify your emailId( Must verify to avoid issues) => go to My APi keys under your account name(top right corner) or https://home.openweathermap.org/api_keys => save the key/appid somewhere. Now proceed further
Create API's to do each of the following:
    - get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)
     - then change the above to get the temperature only( of London)
     - Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature
     result should look something like this
     [
        {city:"London", temp: 280},
        {city:"Moscow", temp: 290},
        {city:"Bangalore", temp: 301.2},
        .......
    ]
 */


let getTemperature = async function (req, res) {
    try {
        let appid = req.query.appid
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow","Bhiwandi"]
        let sortTime = []
        for (let i in cities) {
            let s = {}
            q = cities[i]
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
            }
            let result = await axios(options)
            s["city"] = cities[i]
            s["temp"] = result.data.main['temp']
            sortTime.push(s)
        }
        let sort = sortTime.sort((a,b)=> a.temp - b.temp)
        res.status(200).send({msg: sort})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getTemperature = getTemperature
module.exports.getWeathers = getWeathers