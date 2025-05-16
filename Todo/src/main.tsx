import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { TodoProvider } from './TodoContext'
import './index.css'
import router from './router.tsx'

createRoot(document.getElementById('root')!).render(
  <TodoProvider>
    <RouterProvider router={router} />
  </TodoProvider>
)
