let storeData = require("../data/db.json")

const getData = () => {
    return storeData
}

const getProductById = (id) => {
    return storeData.products.find((object) => object.id === id)
}

const getPurchaseById = (id) => {
    return storeData.purchases.find((purchase) => purchase.id === id)
}

const addPurchase = (purchase) => {
    const currentDate = new Date();

    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
    const currentYear = currentDate.getFullYear();

    const time = currentDate.getHours() + ":" + currentDate.getMinutes()

    const dateString = time + "  " +currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;

    storeData.purchases.push({"id": storeData.purchases.length + 1, "time": dateString,"orderDetails":purchase})
}

module.exports = {
    getData,
    getProductById,
    getPurchaseById,
    addPurchase
}