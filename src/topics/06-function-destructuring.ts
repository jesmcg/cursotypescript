
export interface Product {

    description: string;
    price: number;

}

// const phone: Product = {
//     description: 'Nokia A1',
//     price: 150.0
// }

// const tablet: Product = {
//     description: 'iPad Air',
//     price: 250
// }

interface TaxCalculatorOptions {
    tax: number;
    products: Product[];
}

// function taxCalculator( {products, tax} : TaxCalculatorOptions): [number, number]{    
// function taxCalculator( {products, tax} : TaxCalculatorOptions): [number, number]{    let total = 0;
export function taxCalculator( options : TaxCalculatorOptions): [number, number]{    let total = 0;
    const  {products, tax} = options;

    products.forEach( ({price}) => {
        total += price;
    });

    return [total, total * tax];
}

// const shoopingCart = [phone, tablet];
// const tax = 0.16;


// const [total, taxtotal]  = taxCalculator({
//     products: shoopingCart,
//     tax: tax,
// });



// console.log('Total ', total);
// console.log('Tax: ', taxtotal);



// export {}