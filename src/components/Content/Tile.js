import React from 'react'

const Tile = ({ className, content, title }) => (
  <div className='tile is-parent'>
    <div className={'tile is-child notification box '.concat(className)}>
      <p className='title'>{title}</p>
      <span className='content'>{content}</span>
    </div>
  </div>
)

export default Tile
