//get necessary imports
const express = require('express')
const morgan = require('morgan')
const cors = require("cors")
const productRouter = require("../student-store-express-api/routes/products")
const purchaseRouter = require("../student-store-express-api/routes/purchases")

// create express appllication
const app = express()

// middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get("/", (req, res) => {
    res.json({"ping":"pog"})
})

app.use('/store', productRouter)

app.use('/purchases', purchaseRouter)

module.exports = app