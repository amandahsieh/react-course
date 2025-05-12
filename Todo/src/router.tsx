import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TodosPage from './pages/TodosPage'

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/todos', element: <TodosPage /> }
])

export default router