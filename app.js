/* function for calculating extra product cost */
function getProductCost(product, extra, price) {
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraStorageCost = document.getElementById('extra-storage-cost');
    const delivaryCost = document.getElementById('delivary-cost');
    if (product == 'memory-8gb') {
        extraMemoryCost.innerText = '0';
    }
    else if (product == 'memory-16gb') {
        extraMemoryCost.innerText = '180';
    }
    else if (product == 'storage-256gb') {
        extraStorageCost.innerText = '0';
    }
    else if (product == 'storage-512gb') {
        extraStorageCost.innerText = '100';
    }
    else if (product == 'storage-1tb') {
        extraStorageCost.innerText = '180';
    }
    else if (product == 'free-delivary') {
        delivaryCost.innerText = '0';
    }
    else {
        delivaryCost.innerText = '20';
    }
}

// function for calculating total price

// get access two memory button
document.getElementById('memory-8gb').addEventListener('click', function () {
    getProductCost('memory-8gb', 0);
});
document.getElementById('memory-16gb').addEventListener('click', function () {
    getProductCost('memory-16gb', 180);
});

// get access three storage button
document.getElementById('storage-256gb').addEventListener('click', function () {
    getProductCost('storage-256gb', 0);
});
document.getElementById('storage-512gb').addEventListener('click', function () {
    getProductCost('storage-512gb', 100);
});
document.getElementById('storage-1tb').addEventListener('click', function () {
    getProductCost('storage-1tb', 180);
});

// get access two delivary option button
document.getElementById('free-delivary').addEventListener('click', function () {
    getProductCost('free-delivary', 0);
});
document.getElementById('delivary-with-charge').addEventListener('click', function () {
    getProductCost('delivary-with-charge', 20);
});