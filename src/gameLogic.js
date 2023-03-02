const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (const [a, b, c] of lines) {
    if (squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
  //make a fetch call and return the result
  // return fetch("http://localhost:5000/winner/").then((res) => res.json())
}

// const getFreshBoard = () => Array(9).fill(null)
const getFreshBoard = async () => {
  fetch("http://localhost:5000/board/")
    .then((data) => data.json())
    .then((data) => (data.squares))
}
const getNextBoard = (squares, i, xIsNext) => (squares[i] = xIsNext ? "X" : "O")

module.exports = { calculateWinner, getFreshBoard, getNextBoard }

// make a fetch call to the back end or axios
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
