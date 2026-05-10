import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CarbonProvider from 'carbon-react/lib/components/carbon-provider'
import { sageTheme } from 'carbon-react/lib/style/themes'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CarbonProvider theme={sageTheme}>
      <App />
    </CarbonProvider>
  </StrictMode>,
)
