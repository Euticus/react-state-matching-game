import React from 'react'

import Button from '../Button'
import TileSelector from '../TileSelector'

const OptionsPanel = (props) => {
  const {numTiles, playing, startGame} = props

  return (
    <div>
      <TileSelector numTiles={numTiles} />
      <Button playing={playing} startGame={startGame}/>
    </div>
  )
}
  
  

export default OptionsPanel
