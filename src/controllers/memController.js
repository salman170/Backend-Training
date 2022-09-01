let axios = require("axios")

/**
 * 3. Axios POST request assignment

1. Get all the memes at Postman (https://api.imgflip.com/get_memes)
2. Pick a memeId you want (Eg 129242436) for the POST request
3. Create a Post request (https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below):
template_id <meme_id>
            text0 <text you want as a caption>
            text1 <optional>
            username chewie12345
            password meme@123

            4. Return a response with a body like this
            "data": {
                    "url": "https://i.imgflip.com/5mvxax.jpg",
                    "page_url": "https://imgflip.com/i/5mvxax"
                }
 */


let memCreation = async function(req, res){
try {
    let query = req.query
    var options = {
        method: "post",
        url: `https://api.imgflip.com/caption_image?template_id=${query.template_id}&text0=${query.text0}&username=${query.username}&password=${query.password}`
    }

    let result = await axios(options)
    console.log(result.data)
    res.status(200).send({ msg: result.data })
}
catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}}

module.exports.memCreation = memCreation