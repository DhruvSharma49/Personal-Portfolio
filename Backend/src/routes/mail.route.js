const express = require('express');
const router = express.Router();
const sendMailcontroller=require("../controllers/sendMail.controller")
const setsendlimitmiddleware=require("../middlewares/setsendlimit")

router.post("/sendemail",sendMailcontroller,setsendlimitmiddleware)

module.exports = router;