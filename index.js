const express = require('express');


const server = express();

server.get("/health-check", (req, res) => {
    res.json({message:"ok!"})
})

server.listen(3000, () => {
    console.log("server started ON 3000")
})

