import { useEffect, useState } from "react"
import Square from "./Square"
import { calculateWinner, getFreshBoard, getNextBoard } from "./gameLogic"

const Board = () => {
  const [squares, setSquares] = useState(null)
  const [xIsNext, setXIsNext] = useState(true)
  const [status, setStatus] = useState("Next player: " + (xIsNext ? "X" : "O"))
  useEffect(() => {
    const getFreshSquares = async () => {
      let freshSquares = await getFreshBoard()
      setSquares(freshSquares)
    }
    getFreshSquares()
  }, [])

  const handleClick = (i) => {
    console.log(squares)
    const squaresB = squares.slice()
    if (calculateWinner(squaresB) || squaresB[i]) {
      return
    }
    getNextBoard(squaresB, i, xIsNext)
    const winner = calculateWinner(squares)
    if (winner) {
      setStatus("Winner: " + winner)
    } else {
      setStatus("Next player: " + (xIsNext ? "X" : "O"))
    }
    setSquares(squaresB)
    setXIsNext(!xIsNext)
  }
  if (!squares) return <div>Loading</div>
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
