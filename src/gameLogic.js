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
}


const getFreshBoard = () => Array(9).fill(null)
const getNextBoard = (squares, i, xIsNext) => squares[i] = xIsNext ? "X" : "O"

module.exports = {calculateWinner, getFreshBoard, getNextBoard}

// create a repository flask backend tictactoe - virtual enviroment, pytest, gitignore
// create requirements file - latest version of flask
// create python file - the 3 functions converted to python and tested
// read - fetch (javascript) - git request to pokemon edpoint and log response
