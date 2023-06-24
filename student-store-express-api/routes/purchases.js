const express = require("express")
const router = express.Router()
const storeData = require ('../models/store-data')

router.get("/", (req,res) => {
    const storeInfo = storeData.getData()
    res.json(storeInfo)
})

router.get("/:purchaseId", (req, res) => {
    const { purchaseId } = req.params
    const storeInfo = storeData.getPurchaseById(parseInt(purchaseId))
    res.json(storeInfo)
})

router.post("/", (req, res) => {
    // const { purchase } = req.body;
    const newPurchase = storeData.addPurchase(req.body);
    res.json(newPurchase);
})

module.exports = router

