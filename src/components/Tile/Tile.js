import React from 'react'

import './Tile.css'

const Tile = ({selected, matched, color, svg}) => {

  let dynamicColor = selected || matched ? backgroundColor.color : null

  return (
    <div className='Tile' style={dynamicColor}>
      {selcted || matched ? svg : null}
    </div>
  )
}

export default Tile
