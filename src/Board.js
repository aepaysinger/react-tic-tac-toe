import { useEffect, useState } from "react"
import { calculateWinner, getFreshBoard, getNextBoard } from "./gameLogic"
import Square from "./Square"
import "./Board.css"

const Board = () => {
  const [squares, setSquares] = useState(null)
  const [xIsNext, setXIsNext] = useState(true)
  const [status, setStatus] = useState("Next player: " + (xIsNext ? "X" : "O"))
  const [winner, setWinner] = useState(null)
  useEffect(() => {
    const getFreshSquares = async () => {
      let freshSquares = await getFreshBoard()
      console.log(freshSquares)
      setSquares(freshSquares)
    }
    getFreshSquares()
  }, [])
  useEffect(() => {
    if (winner) {
      setStatus("Winner: " + winner)
    } else {
      setStatus("Next player: " + (xIsNext ? "X" : "O"))
    }
  }, [winner, xIsNext])

  useEffect(() => {
    const getWinner = async () => {
      if (squares) {
        let calculatedWinner = await calculateWinner(squares)
        console.log(calculatedWinner)
        setWinner(calculatedWinner)
      }
    }
    getWinner()
  }, [squares])

  const handleClick = (i) => {
    if (winner || squares[i]) {
      return
    }
    const displayNextBoard = async () => {
      let nextBoard = await getNextBoard(squares, i, xIsNext)
      setSquares(nextBoard)
      setXIsNext(!xIsNext)
    }
    displayNextBoard()
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
