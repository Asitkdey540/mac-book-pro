function priceAdder(id, price) {
    // extraMemoryCost, extraStorageCost, deliveryCost

    // All ID selected.
    const bestPrice = document.getElementById('bestPrice');
    const totalCost = document.getElementById('totalCost');
    const finalTotal = document.getElementById('finalTotal');

    // Initializing extra prices to it's exact position based on the "id" parameter.

    const extraPrices = document.getElementById(id);
    extraPrices.innerText = price;

    // Counting total cost from extra memory, extra storage, delivery cost's inner test and the best price 1299.

    const extraMemory = parseInt(document.getElementById('extraMemoryCost').innerText);
    const extraStorage = parseInt(document.getElementById('extraStorageCost').innerText);
    const deliveryCost = parseInt(document.getElementById('deliveryCost').innerText);

    const total = extraMemory + extraStorage + deliveryCost + 1299;
    // Writing total prices to best price and total price section.

    bestPrice.innerText = total;
    totalCost.innerText = total;
    finalTotal.innerText = total;
}


function discountKupon() {
    const kupon = document.getElementById('kupon');
    const finalTotal = document.getElementById('finalTotal');
    let parseFinalPrice = parseInt(finalTotal.innerText);

    if (kupon.value === "stevekaku") {
        kupon.value = "";
        finalTotal.innerText = parseFinalPrice - parseFinalPrice * (20 / 100);
    }
}

