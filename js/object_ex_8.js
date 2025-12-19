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

/*exersice 8c*/
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
