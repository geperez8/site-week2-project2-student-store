//get necessary imports
const express = require('express')
const morgan = require('morgan')
const cors = require("cors")
const router = require("../student-store-express-api/routes/products")

// create express appllication
const app = express()

// middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get("/", (req, res) => {
    res.json({"ping":"pog"})
})

app.use('/store', router)

module.exports = app