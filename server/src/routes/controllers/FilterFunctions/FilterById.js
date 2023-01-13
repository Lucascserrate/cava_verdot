module.exports = async function FilterById(drinks, id) {
   // let filter = drinks.filter(drink => drink.id === id)
   // console.log(filter);
   let filter = drinks.filter(drink => drink.id === parseInt(id)) 
   console.log(filter);
   return filter
}