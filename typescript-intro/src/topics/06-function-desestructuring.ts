
export interface Product {
    description: string;
    price: number;
}

interface TaxCalculatorOptions {
    tax: number;
    products: Product[]
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}
const tablet: Product = {
    description: "iPad Air",
    price: 250.0
}



//function taxCalculator( options: TaxCalculatorOptions ): [number, number] {
//function taxCalculator( { tax, products }: TaxCalculatorOptions ): [number, number] {
export function taxCalculator( options: TaxCalculatorOptions ): [number, number] {

    const { tax, products } = options
    
    let total = 0;

    products.forEach( ({price}) => {
        total += price
    })

    return [total, total * tax]

}

const shoppingCart = [phone, tablet]
const tax = 0.15

const  [total, taxTotal ] = taxCalculator({
    products: shoppingCart,
    tax: tax
})

console.log('Total', total)
console.log('Total', taxTotal)