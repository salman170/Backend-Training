const express = require('express');
const router = express.Router();

const bookAPController= require("../controllers/bookAPController")

router.post("/createAuthor", bookAPController.createAuthor  )

router.post("/createPublisher", bookAPController.createPublisher  )

router.post("/createBook", bookAPController.createBook  )

router.get("/getBooksWithAuthorDetails", bookAPController.getBooksWithAuthorDetails)

module.exports = router;