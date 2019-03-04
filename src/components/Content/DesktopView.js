import React from 'react'
import classNames from 'classnames'
import Tile from './Tile'
import { useWindowDimensions } from '../WindowDimensionsProvider'

const getClassName = idx => {
  switch (idx) {
    case 0: return 'is-info'
    case 1: return 'is-success'
    case 2: return 'is-primary'
    case 3: return 'is-danger'
    default: return 'is-warning'
  }
}

const DesktopView = ({ items }) => {
  const { width } = useWindowDimensions()
  return (
    <div
      className={classNames('tile is-ancestor', {
        'is-vertical': width > 414 && width < 1088
      })}
    >
      {items.map((item, idx) => (
        <Tile className={getClassName(idx)} key={item.title} {...item} />
      ))}
    </div>
  )
}

export default DesktopView
