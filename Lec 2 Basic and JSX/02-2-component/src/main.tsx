import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Info from './Info.tsx'
import { CourseLogo } from './App.tsx' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CourseLogo />
    <App />
    <h1>main - CourseInfo</h1>
    <Info />
  </StrictMode>,
)
