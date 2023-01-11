async function FilterCountry(drinks, country) {
    let filter = drinks.filter(drink => drink.country.country === country)
    return filter
}
module.exports = FilterCountry