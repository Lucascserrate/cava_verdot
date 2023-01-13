module.exports = async function FilterByName(drinks, name) {

    const drinksName = drinks.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
    );

    return drinksName.length ? drinksName : "drink not found"

}