import React from 'react'
import Tile from '../Tile'
import './Board.css';

const Board = ({numTiles, tiles}) => {

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }

  parseTiles = () => {
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
