import React from 'react'
import Content from './components/Content'
import WindowDimensionsProvider from './components/WindowDimensionsProvider'
import './App.scss'

const data = [
  { title: 'Bananas', content: 'Bananas! I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words. Lorem Ipsum is a choke artist. It chokes!' },
  { title: 'Peppers', content: 'Peppers! I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words. Lorem Ipsum is a choke artist. It chokes!' },
  { title: 'Oranges', content: 'Oranges! I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words. Lorem Ipsum is a choke artist. It chokes!' },
  { title: 'Papaya', content: 'Papaya! I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words. Lorem Ipsum is a choke artist. It chokes!' },
]

const App = () => (
  <WindowDimensionsProvider>
    <div className="App">
      <Content items={data} />
    </div>
  </WindowDimensionsProvider>
)

export default App
