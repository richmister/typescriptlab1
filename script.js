"use strict";
let mountains = [
    {
        name: "kilimanjaro",
        height: 19341,
    },
    {
        name: "everest",
        height: 29029,
    },
    {
        name: "denali",
        height: 20310,
    },
];
const findNameOfTallestMountain = (anArrayOfMtn) => {
    return anArrayOfMtn.reduce((acc, curVal) => {
        return curVal.height > acc.height ? curVal : acc;
    }).name;
};
console.log(findNameOfTallestMountain(mountains));
let products = [
    {
        name: "twinkie",
        price: 2.0,
    },
    {
        name: "hoho",
        price: 1.5,
    },
    {
        name: "dingdong",
        price: 1.0,
    },
];
const calcAverageProductPrice = (anArrayOfProduct) => {
    let total = 0;
    anArrayOfProduct.forEach((item) => {
        total = total + item.price;
    });
    return total / anArrayOfProduct.length;
};
console.log(calcAverageProductPrice(products));
let inventory = [
    {
        product: { name: "motor", price: 10 },
        quantity: 10,
    },
    {
        product: { name: "sensor", price: 12.5 },
        quantity: 4,
    },
    {
        product: { name: "led", price: 1.0 },
        quantity: 20,
    },
];
const calcInventoryValue = (arrayOfInventory) => {
    let total = 0;
    return arrayOfInventory.forEach(price => {
        total = price;
        Number.length;
        +quantity * Number;
    });
};
console.log(calcInventoryValue(inventory));
;
