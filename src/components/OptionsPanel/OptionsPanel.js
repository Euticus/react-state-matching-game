import React from 'react'

import Button from '../Button'
import TileSelector from '../TileSelector'

const OptionsPanel = (props) => {
  const {numTiles, playing, startGame, handleNumTileChange } = props

  return (
    <div>
      <TileSelector numTiles={numTiles} handleNumTileChange={handleNumTileChange}/>
      <Button playing={playing} startGame={startGame}/>
    </div>
  )
}
  
  

export default OptionsPanel
