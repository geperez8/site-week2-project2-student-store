const express = require("express")
const router = express.Router()
const storeData = require ('../models/store-data')

router.get("/", (req,res) => {
    const storeInfo = storeData.getData()
    res.json(storeInfo)
})

router.get("/:id", (req,res) => {
    const { id } = req.params
    const storeInfo = storeData.getProductById(parseInt(id))
    res.json(storeInfo)
})

module.exports = router
