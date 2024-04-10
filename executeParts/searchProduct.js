
async function searchProduct(x, y) {
    await x.get("http://emag.ro")
    await x.findElement(y.By.name('query')).sendKeys('Iphone 11', y.Key.ENTER)
    await x.findElement(y.By.linkText("Telefon mobil Apple iPhone 11, 64GB, Black")).click()
}

module.exports = searchProduct
