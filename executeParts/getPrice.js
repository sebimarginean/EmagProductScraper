
async function getPrice(x) {
    return x.executeScript(() => 
        document.querySelector(".product-new-price").innerText.split(" ")[0]
    ).then((price) => {
        return (price*1000).toFixed(2)
    })
}

module.exports = getPrice