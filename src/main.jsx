import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "./styles/fonts.css"
import { BrowserRouter } from "react-router-dom"
ReactDOM.createRoot(document.querySelector('body')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
