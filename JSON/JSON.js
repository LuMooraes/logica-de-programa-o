let invoice = {
    name: "Lucas",
    age: 24,
    products: {
    	0: ["mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor", "899.99"],
        3: ["TV 100 polegadas", "10000.90"]
    },
    taxes: "98.90"
}

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade do comprador é ${invoice.age}`)
    console.log("------------------------------------")
    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(` - ${productName}: R$ ${productPrice}`)
            }
}
    

generateInvoice(invoice)