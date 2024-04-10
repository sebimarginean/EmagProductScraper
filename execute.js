async function execute() {
    const search = require('./executeParts/searchProduct')
    const price = require('./executeParts/getPrice')
    const webdriver = require("selenium-webdriver")
    const driver = new webdriver.Builder().forBrowser("chrome").build()
    const fetch = require('node-fetch');
    await search(driver, webdriver)
    
    await setInterval( async function () {
        var pret = await price(driver)

        const api_url = `http://localhost:3000/${pret}`
        const response = await fetch(api_url)
        const json = await response.json()
        response.json(json)
        
        await driver.navigate().refresh()
    }, 6000)
}
module.exports = execute