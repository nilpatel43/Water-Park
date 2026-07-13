import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './Media.css'
import Waterpark from './WaterPark.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Waterpark />
  </StrictMode>,
)
