module.exports = async function FilterByPrice(drinks, price) {
    let filter;
    if (price === 'menor a 100') {

        filter = drinks.filter(e => e.price < 100)


    }

    if (price === 'de 100 a 300') {

        filter = drinks.filter(e => e.price > 100 && e.price <= 300)


    }

    if (price === 'de 300 a 500') {

        filter = drinks.filter(e => e.price > 300 && e.price <= 500)


    }
    return filter
}