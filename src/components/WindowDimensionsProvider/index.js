import React, { createContext, useContext, useState, useEffect } from 'react'

export const WindowDimensionsCtx = createContext(null)

const windowDims = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
})

const WindowDimensionsProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState(windowDims())
  useEffect(() => {
    const handleResize = () => {
      setDimensions(windowDims())
    }
    window.addEventListener('load', handleResize)
    window.addEventListener('resize', handleResize)
    return () => { 
      window.removeEventListener('load', handleResize)
    window.removeEventListener('resize', handleResize)}
  }, [])
  return (
    <WindowDimensionsCtx.Provider value={dimensions}>
      {children}
    </WindowDimensionsCtx.Provider>
  )
}

export default WindowDimensionsProvider

export const useWindowDimensions = () => {
  return useContext(WindowDimensionsCtx)
}
