/*exersice 8a*/
const product = {
    name : 'basketball',
    price : 2095
};
console.log(product.name);
console.log(product.price);

/*exersice 8b*/
product.price = product.price + 500 ;
console.log(product.price);

/*exersice 8c*/
product['delivery-time'] = '3 days';
console.log(product);
console.log(product['delivery-time']);

/*exersice 8d*/
const product1 = {
    name : 'sling fan',
    price : 3000
};
const product2 = {
    name : 'table fan',
    price : 2500
};
function comparePrice(product1,product2){
    if (product1.price > product2.price)
    {
        console.log(`${product2.name} is less expensive.`);
    }
    else{
        console.log(`${product1.name} is less expensive.`);
    }
    alert(`look in the console!`);
}

/*exersice 8e*/
const product3 = {
    name : 'fan',
    price : 3000
};
const product4 = {
    name : 'T fan',
    price : 3000
};
function isSameProduct(product3,product4){
    if(product3.name === product4.name && product3.price === product4.price){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
/*exersice 8f*/
let str = 'HE is GooD!\n';
let lower = str.toLocaleLowerCase();
console.log('this is all lowercase string : ')
console.log(lower);

/*exersice 8g*/
repeat = lower.repeat(10);
console.log('this is repeating string : ');
console.log(repeat);

