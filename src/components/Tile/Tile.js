import React from 'react'

import './Tile.css'

const Tile = (props) => {
  const {selected, matched, color} = props;

  return (
    <div className='Tile' style={selected || matched ? {backgroundColor: color} : null}>
      {selected || matched ? <props.svg /> : null}
    </div>
  )
}

export default Tile
