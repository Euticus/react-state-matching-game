import React from 'react'
import Tile from '../Tile'
import './Board.css';

const Board = (props) => {
  const {numTiles, tiles} = props
  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(numTiles)}, 1fr)`,
  }

  const parseTiles = () => {
    tiles.map((tile)=>{
      return <Tile tile={tile} />
    })
  }

  return (
    <div className='Board' style={gridConfig}>
      {parseTiles()}
    </div>
  )
}

export default Board
