const express = require('express');
const router = express.Router();

const bookAPController= require("../controllers/bookAPController")
const authorController= require("../controllers/authorController")
const publisherController= require("../controllers/publisherController")


router.post("/createAuthor", authorController.createAuthor  )

router.post("/createPublisher", publisherController.createPublisher  )

router.post("/createBook", bookAPController.createBook  )

router.get("/getBooksWithAuthorDetails", bookAPController.getBooksWithAuthorDetails)

router.put("/updateBook", bookAPController.updateBook)

module.exports = router;