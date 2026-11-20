import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { asset } from './lib/asset'

document.documentElement.style.setProperty(
  '--crave-pattern',
  `url("${asset('brand/pack/graphics/riot-dot-pattern.svg')}")`,
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
