const express = require("express");
const TicketRouter = express.Router();

TicketRouter.all("/", (req, res, next) => {
    res.json({
        message:"returning TIcket router"
    })
})




module.exports=TicketRouter