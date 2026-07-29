import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './shared/providers/ThemeProvider.jsx'
import { SoundProvider } from './shared/providers/SoundProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <SoundProvider>
      <App />
      </SoundProvider>
    </ThemeProvider>
  </StrictMode>,
)
