// const getPokeData = () => {
//   let data = fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
//     method: "GET",
//     headers: { "Content-type": "application/json" },
//     body: JSON.stringify(),
//   }).then((data) => {
//     return data.json()
//   })
//   return data
// }

// let data = await getPokeData()
// console.log(data)
// const getPokeData = async () => {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
//     method: "GET",
//     headers: { "Content-type": "application/json" },
//     body: JSON.stringify(),
//   })
//   //   const data = await response.json()
//   return response.json()
// }

// getPokeData().then((data) => {
//   let pokemonName = data.name
//   let pokemonAbilities = []
//   data.abilities.forEach((ability) => {
//     pokemonAbilities.push(ability.ability.name)
//   })
//   console.log(data)
//   return pokemonName, pokemonAbilities
// })


// const getPractice = async () => {
//   let response = await fetch("http://localhost:5000/hello/", {
//     mode: "no-cors",
//   }).then((response) => {
//     return response.json()
//   })
//   return response
// }

// const root = document.getElementById("root")

// getPractice().then((data) => {
//   root.textContent = data
//   console.log(data)
//   console.log("abc")
// })

//AJAX?
//AXIOS

const getPractice = async () => {
  const response = await fetch("http://localhost:5000/hello/", {
    mode: "no-cors",
  })
  // const data = await response.json()
  console.log(response)
  console.log(response.text())
  return response.text()
}

const root = document.getElementById("root")

getPractice().then((data) => {
  root.textContent = data
  console.log(data)
  console.log("abc")
})
