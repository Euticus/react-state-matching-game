import React from 'react'
import Tile from '../Tile'
import './Board.css';

const Board = (props) => {
  const {numTiles, tiles} = props
  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(numTiles)}, 1fr)`,
  }

  const tilesArr = props.tiles.map((tile) => (<Tile {...tile} />))

  return (
    <div className='Board' style={gridConfig}>
      {tilesArr}
    </div>
  )
}

export default Board
