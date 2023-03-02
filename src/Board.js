import { useState } from "react"
import Square from "./Square"
import { calculateWinner, getFreshBoard, getNextBoard } from "./gameLogic"

const Board = () => {
  const [squares, setSquares] = useState(getFreshBoard())
  const [xIsNext, setXIsNext] = useState(true)

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = "Winner: " + winner
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O")
  }

  const handleClick = (i) => {
    console.log(squares)
    const squaresB = squares.slice()
    if (calculateWinner(squaresB) || squaresB[i]) {
      return
    }
    getNextBoard(squaresB, i, xIsNext)
    setSquares(squaresB)
    setXIsNext(!xIsNext)
  }

  return (
    <div>
      <div className="status">{status}</div>
      {[0, 1, 2].map((i) => {
        return (
          <div key={"row" + i} className="board-row">
            {[i * 3 + 0, i * 3 + 1, i * 3 + 2].map((j) => (
              <Square
                key={"square" + j}
                value={squares[j]}
                onClick={() => handleClick(j)}
              />
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default Board
