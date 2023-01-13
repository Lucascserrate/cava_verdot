async function FilterCategory(drinks, category) {
    let filter = drinks.filter(drink => drink.category.category === category)
    return filter
}

module.exports = FilterCategory
