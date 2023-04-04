const calculateWinner = async (squares) => {
  return fetch("http://localhost:5000/winner/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ squares: squares }),
  })
    .then((data) => data.json())
    .then((data) => data.winner)
}

const getFreshBoard = async () => {
  return fetch("http://localhost:5000/board/")
    .then((data) => data.json())
    .then((data) => data.squares)
}

const getNextBoard = async (squares, i, xIsNext) => {
  return fetch("http://localhost:5000/board/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ squares: squares, i: i, x_is_next: xIsNext }),
  })
    .then((data) => data.json())
    .then((data) => data.squares)
}

module.exports = { calculateWinner, getFreshBoard, getNextBoard }
