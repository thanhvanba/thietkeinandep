import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop.js'
import Loader from './components/Loader/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Loader /> */}
      {/* <LoaderStyle2 /> */}
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
