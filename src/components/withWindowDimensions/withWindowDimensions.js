import React, { PureComponent, forwardRef } from 'react'
import { WindowDimensionsCtx } from '../WindowDimensionsProvider'

const withWindowDimensions = mapDimensionsToProps => WrappedComponent => {
  class Wrapped extends PureComponent {
    static displayName = `withWindowDimensions(${
      WrappedComponent.displayName || WrappedComponent.name
    })`

    render() {
      const { forwardedRef } = this.props
      return (
        <WindowDimensionsCtx.Consumer>
          {dimensions => (
            <WrappedComponent
              {...this.props}
              {...mapDimensionsToProps(dimensions)}
              ref={forwardedRef}
            />
          )}
        </WindowDimensionsCtx.Consumer>
      )
    }
  }

  return forwardRef((props, ref) => <Wrapped {...props} forwardedRef={ref} />)
}

export default withWindowDimensions

/**
 * sample usage:
 * 
 * import React from 'react'
 * import withWindowDimensions from '../withWindowDimensions'
 * 
 * const DumbComponent = ({ width }) => (
 *   <span>Page is {width} pixels wide.</span>
 * )
 * 
 * const mapDimensionsToProps = dimensions => ({
 *   width: dimensions.width,
 * })
 * 
 * export default withWindowDimensions(mapDimensionsToProps)(DumbComponent)
 * 
 */
