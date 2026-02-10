import type { Product } from './06-function-desestructuring';
import { taxCalculator } from './06-function-desestructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
];

const [ total, tax ] = taxCalculator({
    products: shoppingCart,
    tax: 0.15
})

console.log('Total', total)