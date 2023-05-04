import { Product, taxCalculator } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'ipad',
        price: 150
    }
];


const [total, tax] = taxCalculator({
    products: shoppingCart,
    tax: 16
});

console.log('Total', total);
console.log('Tax', tax);