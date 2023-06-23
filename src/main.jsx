import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Body from './Body'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>,
)
