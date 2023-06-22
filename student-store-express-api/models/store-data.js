let storeData = require("../data/db.json")

const getData = () => {
    return storeData
}

const getProductById = (id) => {
    return storeData.products.find((object) => object.id === id)
}

module.exports = {
    getData,
    getProductById,
}