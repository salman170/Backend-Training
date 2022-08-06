const moment = require('moment')
const batch = "Plutonium"

function printDate() {
const m = moment()
console.log (m.format("[Today is] dddd [, Month is] MMM [and Year is] yyyy"))
console.log(batch,'W3D5, The topic for today is NodeJs Module System')

}

module.exports.batch = batch
module.exports.printDate = printDate

//     let today = new Date();
// //     // console.log(today.getDay() +"," +(today.getMonth()+1))
// let date = today.getDate() +"-" + (today.getMonth()+1) + "-" + today.getFullYear();
// console.log (date)
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Radon, W3D3, the topic for today is Nodejs module system’
