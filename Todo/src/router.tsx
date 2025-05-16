import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TodosPage from './pages/TodosPage'
import DetailPage from './pages/DetailPage'

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/todos', element: <TodosPage /> },
    {
        path: '/todos/:id',
        element: <DetailPage todos={[]} />
    },
])

export default router