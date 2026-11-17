
let name = "Milk";
let basePrice = 600;
let discountPercent = 10;
let taxRate = 5;
let stockStatus = "in_stock";

function calculateDiscountedPrice(price, discount) {
    return price - (price * discount / 100);
}
function calculateTax(price, taxRate) {
    return price * taxRate / 100;
}
function calculateFinalPrice(price, discount, taxRate) {
    let price1 = calculateDiscountedPrice(price, discount);
    let tax = calculateTax(price1, taxRate);
    return price1 + tax;
}

function isFreeShipping(price) {
    if (price >= 500) {
        return "Free Shipping";
    } else {
        return "Shipping Rs.49";
    }
}

function getStockMessage(status) {
    if (status == "in_stock") {
        return "In Stock";
    } else if (status == "limited") {
        return "Limited Stock";
    } else {
        return "Out of Stock";
    }
}

let discount = calculateDiscountedPrice(basePrice, discountPercent);
let tax = calculateTax(discount, taxRate);
let final = calculateFinalPrice(basePrice, discountPercent, taxRate);
let shipping = isFreeShipping(final);
let stock = getStockMessage(stockStatus);

console.log("Product Name:", name);
console.log("Base Price:", basePrice);
console.log("Discounted Price:", discount);
console.log("Tax Amount:", tax);
console.log("Final Price:", final);
console.log("Shipping:", shipping);
console.log("Stock:", stock);
