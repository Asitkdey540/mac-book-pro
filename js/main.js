function priceAdder(id, price) {
    // extraMemoryCost, extraStorageCost, deliveryCost

    // All ID selected and their inner text stored into variables.
    const bestPrice = document.getElementById('bestPrice');
    const extraMemory = parseInt(document.getElementById('extraMemoryCost').innerText);
    const extraStorage = parseInt(document.getElementById('extraStorageCost').innerText);
    const deliveryCost = parseInt(document.getElementById('deliveryCost').innerText);
    const totalCost = document.getElementById('totalCost');

    // Initializing extra prices to it's exact position based on the "id" parameter.

    const extraPrices = document.getElementById(id);
    extraPrices.innerText = price;

    // Counting total cost from extra memory, extra storage, delivery cost's inner test and the best price 1299.

    const total = extraMemory + extraStorage + deliveryCost + 1299;

    // Writing total prices to best price and total price section.

    bestPrice.innerText = total;

    totalCost.innerText = total;
}

