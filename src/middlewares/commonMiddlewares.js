
const mid1 = function (req, res, next) {
    let head = req.headers
    if (!req.headers["isfreeappuser"]) {
        res.send({ status: false, msg: "the request is missing a mandatory header" })
        return;
    }
    else {
        req.isFreeAppUser = Boolean(req.headers.isfreeappuser)
        let data = req.body
        data["isFreeAppUser"] = req.isFreeAppUser
        next()
    }
}



module.exports.mid1 = mid1


