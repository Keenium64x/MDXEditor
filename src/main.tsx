import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MDEditor from './MDEditor.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MDEditor mdInput='The markdown to input'/>
  </StrictMode>,
)
