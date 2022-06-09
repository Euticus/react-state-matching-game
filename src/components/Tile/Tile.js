import React from 'react'

import './Tile.css'

const Tile = (props) => {
  const {selected, matched, svg, color} = props;

  return (
    <div className='Tile' style={selected || matched ? {backgroundColor: color} : null}>
      {selected || matched ? {svg} : null}
    </div>
  )
}

export default Tile
