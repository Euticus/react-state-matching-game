import React from 'react'

import './Tile.css'

const Tile = (props) => {
  const {id, selected, matched, color, handleTileClicked} = props;

  return (
    <div className='Tile' 
      style={selected || matched ? {backgroundColor: color} : null}
      onClick={()=>handleTileClicked(id, color)}
    >
      {selected || matched ? <props.svg /> : null}
    </div>
  )
}

export default Tile
