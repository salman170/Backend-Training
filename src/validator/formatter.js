
function ass3(){
const t = "     We are the best.     "
const afterTrim = t.trim()
console.log("trim funtion for=>",t,"is,",afterTrim)
const UpperCase = afterTrim.toUpperCase()
console.log("UpperCase for => ",afterTrim,"is ,",UpperCase)
const LowerCase = afterTrim.toLocaleLowerCase()
console.log("LowerCase for => ",afterTrim,"is ,",LowerCase)
}

module.exports.fun = ass3


