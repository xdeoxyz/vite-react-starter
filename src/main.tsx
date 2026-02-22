import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app'

const domNode: HTMLElement = document.getElementById('root')!
const root: ReturnType<typeof createRoot> = createRoot(domNode)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
